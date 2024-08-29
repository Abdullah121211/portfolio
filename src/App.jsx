import React from 'react'

import Contact from './Contact'
import About from './About'
import Navbar from './Navbar'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Skill from './Skill'
import Home from './Home'
import Services from './Services'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/skills' element={<Skill/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App