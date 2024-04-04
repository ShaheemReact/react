import { useState } from "react"

export default function TimerChallengers({title,targetTime}){
    const [timerStarted,setTimerStarted] = useState(false)
    const [timerExpire,setTimerExpire] = useState(false)
    function handleStart(){
        setTimeout(()=>{
            setTimerExpire(true)    
        },targetTime * 1000)
        setTimerStarted(true)

    }


    return <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime >1 ? 's': ''}

        </p>
        <p><button onClick={handleStart}>
            {timerStarted ? 'Stop':'Start'} Challenge
            </button></p>
            {timerExpire&&<p>you Lost!!</p>}
            <p className={timerStarted ? "active":undefined}>
                {timerStarted  ?'timer is running...':'timer inactive'}
            </p>
    </section>
}