import { useState,useRef } from "react"
import ResultModal from "./ResultModal"


export default function TimerChallengers({title,targetTime}){
    const timer = useRef()
    const dialogue = useRef()
    

    const [timeRemaining,seTimeRemaining] = useState(targetTime *1000);
    const timeActive = timeRemaining > 0 && timeRemaining < targetTime *1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialogue.current.open()
    }

    function handleStart(){
        timer.current = setInterval(()=>{
            seTimeRemaining(prevTimeRemaining=> prevTimeRemaining - 10
            )    
        },10)

    }

    function handleStop(){
        dialogue.current.open()
        clearInterval(timer.current)

    }
    function handleReset(){
        seTimeRemaining(targetTime * 1000)

    }
    return( 
    <>
    <ResultModal ref={dialogue} targetTime={targetTime} remaingTime={timeRemaining} onReset={handleReset}/> 
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime >1 ? 's': ''}

        </p>
        <p><button onClick={timeActive ? handleStop : handleStart}>
            {timeActive ? 'Stop':'Start'} Challenge
            </button></p>       
            <p className={timeActive ? "active":undefined}>
                {timeActive  ?'timer is running...':'timer inactive'}
            </p>
    </section>
    </>)
}