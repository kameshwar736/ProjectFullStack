import React from 'react'
import About from './About'

const Home = () => {

    const userName = "react"
  return (
   <>

   <About  sending={userName}/>
   </>
  )
}

export default Home