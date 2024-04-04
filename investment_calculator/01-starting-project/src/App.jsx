import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react"


function App() {
  const [intialVal,setIntialVal] = useState({
    initialInvestment:1000,
    annualInvestment:4000,
    expectedReturn:6,
    duration:10
});
 const inputIsValid = intialVal.duration >=1;

function handleChange(inputItentifier,newValue){
    setIntialVal(prevvalue=>{
        return{
            ...prevvalue,
            [inputItentifier]:+newValue
        };
    })
}

  return (
  <>
    <Header/>
    <UserInput intialVal={intialVal} onChangeInput={handleChange}/>
    {inputIsValid ?<Result userInput={intialVal}/>:<p className="center">Enter   Duration Greater than 0</p>}
    </>
    
  )
}

export default App
