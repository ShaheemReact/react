import { calculateInvestmentResults,formatter } from "../util/investment"

export default function Result({userInput}){
    console.log(userInput,'res')
    const data = calculateInvestmentResults(userInput)
    const intialInvestment = data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment
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
                    {data.map((item)=>{
                        const totalInterest = item.valueEndOfYear - item.annualInvestment *item.year - intialInvestment;
                        const totalAmountInvested = item.valueEndOfYear - totalInterest
                        return<tr key={item.year}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    })}

            </tbody>
        </table>
    )
}