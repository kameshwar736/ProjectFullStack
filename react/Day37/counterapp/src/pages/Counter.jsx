import React from 'react'
import { useState } from 'react'

const Counter = () => {

   const [count,setCount] = useState(0)
    const countProcess = ()=>{
      setCount(count + 1)
      
    }

    const countRevProcess = ()=>{
      setCount(count - 1)
      
    }

    const countresetProcess = ()=>{
      setCount(0)
      
    }





  return (
  <>
  <div className= ' bg-blue-700 h-180 text-white text-center flex flex-col justify-center '>
    <p className='font-extrabold text-7xl relative bottom-7'>{count}</p>
   <div className='flex flex-col gap-3 justify-center items-center'>
     <button onClick={countProcess} className='bg-purple-300 w-40 p-3 rounded-xl text-blue-700'>Increase</button>
     <button onClick={countRevProcess} className='bg-purple-300 w-40 p-3 rounded-xl text-blue-700 '>Decrease</button>
     <button onClick={countresetProcess} className='bg-purple-300 w-40 p-3 rounded-xl text-blue-700'>Reset</button>
   </div>
  </div>
  </>
    
  )
}

export default Counter