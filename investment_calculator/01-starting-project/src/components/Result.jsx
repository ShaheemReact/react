import { calculateInvestmentResults } from "../util/investment"

export default function Result(){
    
    const data = calculateInvestmentResults({initialInvestment:30,annualInvestment:50,expectedReturn:5,duration:5})
    console.log(data)
    return(
        <table id="result">
            <thead>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Caption</th>
            </thead>
            <tbody>
                <tr>
                    {/* <td>{data.initialInvestment}</td>
                    <td>{data}</td>
                    <td>{data}</td>
                    <td>{data}</td>
                    <td>{data}</td>  */}
                    </tr>

            </tbody>
        </table>
    )
}