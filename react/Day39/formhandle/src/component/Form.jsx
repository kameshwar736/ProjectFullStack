import React, { useState } from 'react'

const Form = () => {

    const [user,setUser] = useState("")
    const [click,setClick] = useState("")

    const handlechange = (e)=>{

        setUser(e.target.value)
        

    }
    const handleClick =(e)=>{
        
        e.preventDefault()
        setClick(user) 
        
    }
  return (
    <>
    <div>
        <form>
            <input type="text" placeholder='Enter the value' onChange={handlechange}/>
            <button onClick={handleClick}>clickhere</button>
        </form>
        <p>{click}</p>
    </div>
    </>
  )
}

export default Form