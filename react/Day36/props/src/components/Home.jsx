import React from 'react'
// import About from './About'

const Home = ({sending}) => {

    const userName = "Python"
    console.log(userName);
    console.log(sending);
    
    
    
  return (
   <>
    
    
   <h1>{userName}{sending}</h1>
   </>
  )
}

export default Home