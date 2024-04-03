import { useState } from "react"
import { calculateInvestmentResults } from "../util/investment"

export default function UserInput(){
    const [intialVal,setIntialVal] = useState('')
    const handleChange=(event)=>{
        console.log(event.target.value)
        setIntialVal(event.target.value)
        calculateInvestmentResults(intialVal,0,0,0)
    }
    return(
        <div id="user-input">
            <div className="input-group">
            <label >Initial Investment</label>
            <input type="number" value={intialVal} onChange={handleChange} />
            <label>   Annual Investment</label>
            <input  type="number"/>
            </div>
            <div className="input-group">
            <label>Expected Revenue</label>
            <input type="number"/>
            <label >Duration</label>
            <input type="number"/>
            </div>
        </div>

    )
}