import React from 'react'
import Render from './component/Render'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Color from './component/Color'
import ThemeChange from './component/ThemeChange'
import Toggle from './component/Toggle'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Render/>}/>
      <Route path='/Color' element={<Color/>}/>
      <Route path='Theme' element={<ThemeChange/>} />
      <Route path='/Toggle' element={<Toggle/>}/>
    </Routes>
   
    </>
  )
}

export default App