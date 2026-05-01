import React, { useContext, useEffect, useState } from 'react'
import appContext from '../pages/appContext'

const Form = () => {

   

    const [data, setData] = useState({ userName: "", emailId: "", password: "" })

    const handleForm = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })


    }



    const submitForm = (e)=>{
        e.preventDefault()

        const storeData = localStorage.getItem("projectForm") || []

        const ChangeDatatype = JSON.stringify(data)
        
        storeData.push(ChangeDatatype)

        localStorage.setItem("projectForm",storeData)

        alert("Success")

        

    }

    const passData = useContext(appContext)

    





    return (
        <>
            <div>
                <form onSubmit={submitForm}>
                    <input type="text" onChange={handleForm} name='userName' placeholder='Name' />
                    <input type="text" onChange={handleForm} name='emailId' placeholder='Email' />
                    <input type="text" onChange={handleForm} name='password' placeholder='Password' />
                    <input type="submit" value="submit" />
                </form>
                <div>
                    <h1>{passData}</h1>
                </div>
            </div>
        </>
    )
}

export default Form