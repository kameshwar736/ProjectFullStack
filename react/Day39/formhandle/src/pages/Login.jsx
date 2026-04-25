import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")

  const loginName = "kamesh"
  const loginPass = "12345"

  const getUserName = (e)=>{
   
    setName(e.target.value)
    

  }

  const getUserPass =(e)=>{

    setPassword(e.target.value)

  }

  const checkDetail = (e)=>{

    e.preventDefault()
    if(name == loginName && password == loginPass  ){
    navigate('/Home')
      
    }
    else{
      setError("Invalid Cerdentials !! ")
      
    }

  }



  return (
    <>
      <div className='bg-blue-300 flex justify-center items-center flex-col m-30 p-20 border rounded-2xl w-200'>
        <div className='font-extrabold text-blue-950 text-2xl'>
          <h1>Welcome UserName !</h1>
        </div>
        <div>
            <form onSubmit={checkDetail} className='flex flex-col gap-4 mt-4' >
                <input  onChange={getUserName} type="text" placeholder='Enter the User Name' className='border p-1.5 w-70 rounded bg-white' />
                <input onChange={getUserPass}  type="password" placeholder='Enter the Password'  className='border p-1.5 w-70 rounded bg-white'  />
                <button type="submit" className='bg-blue-950 text-amber-50 p-2 rounded-2xl w-40'>Login</button>
            </form>
        </div>
        <p className='text-red-700 relative top-10 font-bold'>{error}</p>
      </div>
    </>
  )
}

export default Login