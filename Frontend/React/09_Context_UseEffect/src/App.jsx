import React, { useContext, useEffect, useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import axios from 'axios'

const App = () => {

  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [apidata, setApiData] = useState(null)

  let getData = async () => {
    let res = await axios.get('https://fakestoreapi.com/products')
    console.log(res.data);
    setApiData(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log("app rendering");
  },[toggle])
  
  return (
    <div>
       <h1>Count is {count}</h1>
       <button onClick={() => setCount(count+1)}>Increment</button>
       <Home />
       <button onClick={() => setToggle(prev => !prev)}>Change Toggle State</button>

       {/* {toggle ? <Contact /> : <About />} */}
    </div>
  )
}

export default App
