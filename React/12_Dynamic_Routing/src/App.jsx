import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import { Route, Routes } from 'react-router'
import AppRoute from './router/AppRoute'

const App = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Navbar />
      <AppRoute />
    </div>
  )
}

export default App
