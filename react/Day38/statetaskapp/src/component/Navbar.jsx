import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='bg-blue-200 flex justify-between p-5 items-center'>
        <div>logo</div>
        <div className='w-100 p-3 flex justify-evenly '>
            <Link to='/'>Render</Link>
            <Link to='/Color'>ColorChange</Link>
            <Link to='/Theme'>ThemeChange</Link>
             <Link to='/Toggle'>Toggle</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar