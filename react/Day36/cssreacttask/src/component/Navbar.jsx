import React from 'react'
import logo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='bg-blue-100 p-8 flex justify-between '>
                <div className='flex gap-5'>
                    <img src={logo} alt="" className='w-20'/>
                    <h1 className='text-4xl antialiased font-thinq'>React</h1>
                    
                </div>
                <div className='flex justify-evenly bg-red-100 w-80 '>

                
                <Link to="/">About</Link>
                <Link to="/Profile">Profile</Link>

                    
               </div>
                


            </div>

        </>
    )
}

export default Navbar