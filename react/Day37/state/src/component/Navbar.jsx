import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className='bg-blue-500 flex  p-10 justify-between text-white'>
    <div>Logo</div>
   <div className='w-40 flex justify-between'>
    <Link to='/' >Home</Link>
    <Link to='/Render'>RenderProcess</Link>

   </div>
   </div>
   </>
  )
}

export default Navbar