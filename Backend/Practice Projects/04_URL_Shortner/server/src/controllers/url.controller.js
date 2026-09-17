import urlModel from "../models/url.model.js";
import generateCode from "../utils/generateCode.js";


export async function generateUrl(req, res) {
    
    const { url } = req.body;

    if(!url) {
        return res.status(400).json({ error: "Please enter a URL" })
    }

    if((url.startsWith("http://") == false) && (url.startsWith("https://") == false)) {
        return res.status(400).json({ error: "Please enter a valid URL starting with http:// or https://" })
    }

    if(url.length > 2048) {
         return res.status(400).json({ error: "URL is too long." })
    }

    const code = generateCode()

    const newUrl = await urlModel.create({
        originalUrl: url,
        shortCode: code
    })

    return res.status(201).json({
        message: "URL shortened successfully",
        data: {
            newUrl
        }
    })
}


export async function getUrls(req, res) {
    
    const urls = await urlModel.find()

    return res.status(200).json({
        message: "URLs fetched successfully",
        data: {
            urls
        }
    })
}

export async function shortCodeUrl(req, res) {
    
    const { code } = req.params

    const url = await urlModel.findOne({
        shortCode: code
    })

    if(!url) {
       return res.status(404).json({ error: "URL not found" })
    }

    res.redirect(302, url.originalUrl)

    await urlModel.findOneAndUpdate({
        shortCode: code
    }, {
        $inc: { clicks: 1 }
    })

    console.log(url.clicks);
    
};

export async function deleteUrl(req, res) {
    
    const { id } = req.params

    const url = await urlModel.findById(id)

    if(!id) {
        return res.status(404).json({
            message: "URL not found"
        })
    }

    await urlModel.findByIdAndDelete(id)

    return res.status(200).json({
        message: "URL deleted successfully"
    })


}