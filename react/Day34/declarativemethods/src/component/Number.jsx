import React from 'react'

const Number = () => {
    
    const noOfStudent = 25;
    const dateOfBirth = 7/3/2006;
    const age = 20;
    const rollNo = 222303328;
    const orderNo = 110;
    const locationPincode = 600019;
    const mobileNumber = 8807469642;
    const customerId = 203;
    const courseId = 2;
    const totalMark = 100;
 
 
    return (
        <>
        <p>{noOfStudent}</p>
        <p>{dateOfBirth}</p>
        <p>{age}</p>
        <p>{rollNo}</p>
        <p>{orderNo}</p>
        <p>{locationPincode}</p>
        <p>{mobileNumber}</p>
        <p>{customerId}</p>
        <p>{courseId}</p>
        <p>{totalMark}</p>
        </>
    
  )
}

export default Number