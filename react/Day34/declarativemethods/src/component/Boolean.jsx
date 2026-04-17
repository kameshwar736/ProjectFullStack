import React from 'react'



 const nameOfUser = "react"
    const age = 20;
    const idCourse = "mern";
    const isActive = false
    const loginDetail = null
    const userPurchase = 0
    const typeOFTopic = 3
    const location = "chennai"
    const studentDetail = false
    const placedStudent = 10

const Boolean = () => {

   

  return (
   <>
   <h1> Ternary opearator 10 </h1>
    <p>{nameOfUser?"true":"false"}</p>
    <p>{age?"true":"false"}</p>
    <p>{idCourse?"true":"false"}</p>
    <p>{isActive?"true":"false"}</p>
    <p>{loginDetail?"true":"false"}</p>
    <p>{userPurchase?"true":"false"}</p>
    <p>{typeOFTopic?"true":"false"}</p>
    <p>{location?"true":"false"}</p>
    <p>{studentDetail?"true":"false"}</p>
    <p>{placedStudent?"true":"false"}</p>
   </>
  )
}


export const Optional = ()=>{


    return(<>
    <h1>Optional</h1>
     <p>{nameOfUser && "this is true 1  "}</p>
    <p>{age && "this is false 2 "}</p>
    <p>{idCourse && "this is true 3 "}</p>
    <p>{isActive && "this is false 4  "}</p>
    <p>{loginDetail && "this is false 5 "}</p>
    <p>{userPurchase && "this is false 6 "}</p>
    <p>{typeOFTopic && "this is true 7"}</p>
    <p>{location && "this is true 8"}</p>
    <p>{studentDetail && "this is false student detatil 9  "}</p>
    <p>{placedStudent && "this is true 10  "}</p>
    
    
    </>)
}

export default Boolean