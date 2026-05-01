import React from 'react'
import appContext from './appContext'

const AppProvider = ({children}) => {

    const passData = "hello world"
  return (
    <>

    <appContext.Provider value = {passData}>
        {children}
    </appContext.Provider>

    </>
  )
}

export default AppProvider