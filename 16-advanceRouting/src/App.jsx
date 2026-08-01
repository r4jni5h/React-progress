import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import {Route, Routes} from 'react-router-dom'
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Women from './Pages/Women'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/men' element={<Men />} />
          <Route path='/product/women' element={<Women />} />


          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App