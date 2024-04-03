import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";


function App() {

  return (<>
    <Header/>
    <UserInput/>
    <Result/>
    </>
    
  )
}

export default App
