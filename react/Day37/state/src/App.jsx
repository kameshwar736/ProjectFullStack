import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'

import Navbar from './component/Navbar'
import RenderProcess from './component/RenderProcess'

const App = () => {
  return (
  <>

    <Navbar/>
  <Routes>
  <Route path='/' element = {<Home/>}/>
  <Route path='/Render' element= {<RenderProcess/>}/>
  

  </Routes>
  </>
  )
}

export default App