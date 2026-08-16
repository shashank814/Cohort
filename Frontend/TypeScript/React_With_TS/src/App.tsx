import { useEffect, useState } from "react"

import axios from 'axios'
import type { Product } from "./type"
import ProductCard from "./component/ProductCard"

const App = () => {

  const [productsData, setProductsData] = useState<Product[]>([])

  let getData = async () => {
    let res = await axios.get("https://fakestoreapi.com/products")
    console.log(res)
    setProductsData(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div>
      {productsData.map((val) => {
        return <ProductCard key={val.id} product={val} />
      })}
    </div>
  )
}

export default App
