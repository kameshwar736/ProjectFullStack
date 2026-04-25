import React, { useState } from 'react'

const Toggle = () => {

    const [toggle,setToggle] = useState(true)

    const togglebtn=()=>{

        setToggle(!toggle)
    }
    return (
        <>
           <div className='flex flex-col bg-amber-50'>
             <div className=' flex p-10 justify-between'>
                <h1 className='text-3xl relative top-10'>This is Toggle</h1>
                <div>
                    <button onClick={togglebtn} className='bg-gray-400 rounded-xl p-3 w-30 font-light'>Show</button>
                </div>
            </div>

            <p className='p-10'>
               {toggle&&' Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio quam laborum labore repellendus error rerum facilis ipsa, asperiores reiciendis ipsum dignissimos consequuntur assumenda veriteveniet velit esse expedita non soluta.'}
            </p>
           </div>
        </>
    )
}

export default Toggle