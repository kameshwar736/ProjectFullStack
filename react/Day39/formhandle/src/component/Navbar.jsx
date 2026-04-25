import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/favicon.svg'

const Navbar = () => {
  return (
   <>
   <div className='bg-blue-950 text-sky-50 p-6 flex justify-between items-center '>
    <div><img src={logo} alt="" /></div>
    <div className='font-bold p-2 w-100 flex justify-evenly'>
        <Link to='/'>Login</Link>
        <Link to='/Home'>Home</Link>
        <Link to='/Form'>Form</Link>
    </div>
   </div>
   </>
  )
}

export default Navbar