import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home'
import Products from './components/Products'
import DigitalBusinessCard from './components/DigitalBusinessCard'
import TechBlog from './components/TechBlog'

function App(){
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/products' element ={<Products />} />
        <Route path='/digital-business-card' element ={<DigitalBusinessCard />} />
        <Route path='/tech-blog' element ={<TechBlog />} />
      </Routes>
    </Router>
  )
}

export default App