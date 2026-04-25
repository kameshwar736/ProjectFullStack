import React, { useState } from 'react'



const Render = () => {

    const [value, setValue] = useState(true)

    const handleclick = () => {

        setValue(!value)



    }
 


    return (
        <>
            <div className='bg-black text-white flex flex-col justify-center items-center p-10 h-100 gap-10'>
                <h1 className='font-bold'>Conditional Rendering</h1>
                <div>{value ? <p className='bg-green-500 text-black p-3 rounded'>This is true</p> : <p className='bg-red-600 text-black p-3 rounded'>This is false</p>}</div>
                <div><button className='bg-amber-300 p-3 text-black rounded-2xl' onClick={handleclick}>Click to change</button></div>
            </div>


            <div className='bg-green-300  flex flex-col justify-center items-center p-10 h-100 gap-10'>
                <h1 className='font-bold'>Optional Rendering</h1>
                <div>{value && <p className='bg-green-500 text-black p-3 rounded'>This is true</p> }</div>
                <div><button className='bg-amber-300 p-3 text-black rounded-2xl' onClick={handleclick}>Click to change</button></div>
            </div>

        </>
    )
}

export default Render