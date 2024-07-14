import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home'
import Products from './components/Products'
import DigitalBusinessCard from './components/DigitalBusinessCard'
import TechBlog from './components/TechBlog'
import EngineeringProjects from './components/EngineeringProjects'
import ContactUs from './components/ContactUs'  
import Login from './components/Login'

function App(){
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/products' element ={<Products />} />
        <Route path='/digital-business-card' element ={<DigitalBusinessCard />} />
        <Route path='/tech-blog' element ={<TechBlog />} />
        <Route path='/engineering-projects' element ={<EngineeringProjects />} />
        <Route path='/contact-us' element ={<ContactUs />} />
        <Route path='/login' element ={<Login />} />
      </Routes>
    </Router>
  )
}

export default App