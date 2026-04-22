import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Counter from './pages/Counter'
import About from './pages/About'

const App = () => {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Counter' element={<Counter />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </>
  )
}

export default App