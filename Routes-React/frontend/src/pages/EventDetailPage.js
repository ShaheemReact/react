import {useParams} from "react-router-dom"
import { loader as Events } from "./Events.js";

export default function EventDetailPage(){
    const params = useParams();
    return<> <h1>EventDetailPage</h1>
    {/* {Events.map((item)=>{
        if(params.eventId===item.id){
            return <p>{item.title}</p>
        }
    })} */}
    </>
}