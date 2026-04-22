import React from 'react'
import logo from '/favicon.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='bg-purple-300 flex p-6 justify-between '>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div className='text-3xl text-blue-700 font-bold flex items-center ml-40'>
                    <h1>React Counter</h1>
                </div>
                <div className='gap-3 w-50 flex justify-between p-3 text-amber-50 font-light text-sm m-1'>
                    <Link to='/' className='bg-blue-700 p-3 rounded-xl'>Home</Link>
                    <Link to='/Counter'  className='bg-blue-700 p-3 rounded-xl'>Counter</Link>
                    <Link to='/About'  className='bg-blue-700 p-3 rounded-xl' >About</Link>

                </div>
            </div>
        </>
    )
}

export default Navbar