import String from "./component/String"   
import Number from "./component/Number"
import Boolean from "./component/Boolean"
import { Optional } from "./component/Boolean"


const App = () => {
  return (<>
    <h1>Sting 10 Times Make the components </h1>
    <String />
    <h1>Number 10 Times Make the components </h1>
    <Number />
    <h1>Boolean 10 Times Make the components  -  Ternary opearator 10 / Optional 10</h1>
    <Boolean/>
    <Optional/>
  </>
  )
}

export default App