import React, { useState } from 'react'

const ThemeChange = () => {

    const [mode,setMode] = useState(true)

   

    const changeTheme=()=>{
       
        setMode(!mode)


    }

    
     
  return (
   <>
   <div className={mode?'bg-black text-white p-10 flex flex-col  h-195 justify-center items-center gap-2':' bg-white text-black p-10 flex flex-col  h-195 justify-center items-center gap-2'}>
    <h1>Change Theme</h1>
    <div><button onClick={changeTheme} className={mode?'bg-black text-white border p-3 rounded-xl w-30':'bg-white text-black border p-3 rounded-xl w-30'}>{mode?'Light':'Dark'}</button></div>
   </div>
   </>
  )
}

export default ThemeChange