import productModel from "../models/product.model.js";
import { uploadFile } from "../services/storage.service.js";

export async function createProduct(req, res) {
  console.log(req.body);
  console.log(req.files);

  const filesUrls = await Promise.all(
    req.files.map(async (file) => {
      const response = await uploadFile({
        buffer: file.buffer,
        fileName: file.originalname
      })
      return response.url
    })
  )

  // It uploads images one by one which makes the overall code flow very slow
  // for (let i = 0; i < req.files.length; i++) {
  //   const response = await uploadFile({
  //     buffer: req.files[i].buffer,
  //     fileName: req.files[i].originalname,
  //   });

  //   console.log(response);

  //   filesUrls.push(response.url);
  // }

  const product = await productModel.create({
    title: req.body.title,
    description: req.body.description,
    price: {
      amount: Number(req.body["price.amount"]),
      currency: req.body["price.currency"],
    },

    sizes: req.body.sizes,
    images: filesUrls,
    seller: req.user.userId,
  });

  res.status(200).json({
    message: "product created successfully",
    data: {
      product,
    },
  });
}


export async function listAllProducts(req, res) {
    
    const products = await productModel.find({
      published: true
    })

    res.status(200).json({
        message: "Products data fetched successfullu",
        data: {
            products
        }
    })
}


export async function listAllProductsToSeller(req, res) {
  const products = await productModel.find({})

  return res.status(200).json({
    message: "All products fetched successfully",
    data: {
      products
    }
  })
}


export async function unlistProduct(req, res) {
  
  const { id } = req.params

  const product = await productModel.findById(id)

  if(!product) {
    return res.status(404).json({
      message: "product not found by id"
    })
  }

  await productModel.findByIdAndUpdate(id, {
    published: false
  })

  return res.status(200).json({
    message: "Product unpublished successfully"
  })

}


export async function listProduct(req, res) {
  
  const { id } = req.params

  const product = await productModel.findById(id)

  if(!product) {
    return res.status(404).json({
      message: "product not found by id"
    })
  }

  await productModel.findByIdAndUpdate(id, {
    published: true
  })

  return res.status(200).json({
    message: "Product published successfully"
  })

}