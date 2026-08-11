import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [searchData, setSearchData] = useState(null)
  const [productsData, setProductsData] = useState([])
  const [scrollY, setScrollY] = useState(null)

  let throttle = false;

  let getProducts = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products")
      console.log(res);
      setProductsData(res.data)
    } catch (error) {
      console.log("api error", error);
    }
  }

  let filteredData = () => {
    console.log("filter running...");
    
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    })
    console.log(result);
  }

  // Debouncing
  useEffect(() => {
    if(!searchData) return;
    
    let timeout = setTimeout(() => {
      filteredData()
    }, 700)

    return () => clearTimeout(timeout)

  }, [searchData])

  // Throttling
  useEffect(() => {
    let handleScroll = () => {
      if(throttle) return;
      throttle = true;
      console.log("Scroll triggered...");
      setScrollY(window.scrollY);

      setTimeout(() => {
        throttle = false
      }, 1000)
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <h1>Debouncing...</h1>

      <input 
      type="text" 
      placeholder='Search Products' 
      onChange={(e) => setSearchData(e.target.value)}
      className='border px-4 py-1'
      />

      {productsData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>
      })}
    </div>
  )
}

export default App
