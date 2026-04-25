import React from 'react'
import { useState } from 'react'

const Color = () => {

  const [color, setColor] = useState('bg-white')

  const colorRed = () => {

    setColor('bg-red-500')
  }

  const colorBlue = () => {

    setColor('bg-blue-500')
  }

    const colorGreen = () => {

    setColor('bg-green-500')
  }

  console.log(color);
  


  return (
    <>
      <div className='flex flex-col bg-amber-950 p-10 justify-center items-center gap-5 h-195'>
        <div className={`${color} flex justify-center items-center  h-50 w-50`}>
          <h1>this color change</h1>
        </div>
        <div className='bg-black flex gap-5 p-3 rounded-2xl'>
          <button onClick={colorRed} className='p-3 bg-red-500 rounded'>Red</button>
          <button onClick={colorBlue} className='p-3 bg-blue-500 rounded'>Blue</button>
          <button onClick={colorGreen} className='p-3 bg-green-500 rounded'>Green</button>
        </div>
      </div>
    </>
  )
}

export default Color