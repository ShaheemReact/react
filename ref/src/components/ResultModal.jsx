import { forwardRef,useImperativeHandle,useRef } from "react"
import { createPortal } from "react-dom";


const ResultModal =  forwardRef(function ResultModal({targetTime,remaingTime,onReset},ref){
    const dialoue = useRef()
    const userLost = remaingTime <=0;
    const formattedRemaingTime = (remaingTime/1000).toFixed(2);
    const score = Math.round((1-remaingTime/(targetTime *1000))*100);


    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialoue.current.showModal();
            }
        }
    })
    return createPortal(<dialog ref={dialoue} className="result-modal" >
       { userLost &&<h2>You lost</h2>}
       {!userLost &&<h2> Your Score:{score}</h2>}
        <p>Target Time Was <strong>{targetTime} </strong>seconds left.</p>
        <p>TargYoou Stopped  Time at <strong> {formattedRemaingTime}time left </strong>seconds.</p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>,document.getElementById('modal'));
})

export default ResultModal;