import React from 'react'
import { useState } from 'react'

const Register = () => {

    const [userData,setUserData] = useState({userName : "" , email : "" , password : ""})

    const handleClick = (e)=>{

        setUserData({ [e.target.name]:e.target.value})
        
        
        

    }

    console.log(userData);
    
  

    
    

  return (
   <>
   <div>
    <div>
        <form>
            <h1>Register Form</h1>
            <input type="text"  onChange={handleClick} name ="userName" placeholder='Enter the Name' />
            <input type="email" onChange={handleClick} name ="email" placeholder='Enter your Email' />
            <input type="text"  onChange={handleClick} name ="password" placeholder='Enter the Password' />
            <button type="submit">Register</button>
        </form>
    </div>
   </div>
   </>
  )
}

export default Register