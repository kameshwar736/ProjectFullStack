import React from 'react'
import { useState } from 'react'

const RenderProcess = () => {

    const [count,setCount] = useState(0)

    const increaseValue =()=>{

        setCount(count+1)
    }
    const decreaseValue=()=>{

        setCount(count-1)
    }
    const reset=()=>{

        setCount(0)
    }




  return (
   <>
   <div className='bg-blue-400 block justify-center p-20 gap-3 items-center '>
    <p>{count}</p>
    <div>
        <button onClick={increaseValue}>Increase</button>
    </div>
    <div>
        <button onClick={decreaseValue}>Decrease</button>
    </div>
    
    <div>
        <button onClick={reset}>reset</button>
    </div>
    
   </div>
   </>
  )
}

export default RenderProcess