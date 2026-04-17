
const App = () => {
 
 const courseName = "React";

 const sumNum = true
 const value = null


 
  return (
    <>
    
    <h1>{courseName}</h1>
    <h1>{sumNum?"true":"false"}</h1>

    <h1>{sumNum && "this is True"}</h1>    

    <h1>{value ?? "null value"}</h1>
    
    </>


    
  )
}

export default App