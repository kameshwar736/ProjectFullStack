import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'

import About from './pages/About'
import Profile from './pages/Profile'


const App = () => {
  return (
   <>
    
     <Navbar/>

    <Routes>
      
      <Route path='/' element={<About/>}/>
      <Route path='/Profile' element={<Profile/>}/>
    </Routes>

   
   </>
  )
}

export default App