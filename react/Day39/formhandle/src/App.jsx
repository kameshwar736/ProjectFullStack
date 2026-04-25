import React from 'react'
import Form from './component/Form'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <>
   
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
       <Route path='/Form' element={<Form/>}/>
    </Routes>
    </>
  )
}

export default App