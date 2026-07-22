import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { NavLink, Route, Routes } from 'react-router'

const App = () => {
  return (
    <div className='h-screen p-3'>
      <nav className='flex items-center justify-between mb-4'>
        <h1>Logo</h1>
        <div className='flex items-center gap-6 justify-between'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        <p>Login</p>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
