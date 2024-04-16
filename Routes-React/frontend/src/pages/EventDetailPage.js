import {json, redirect, useRouteLoaderData} from "react-router-dom";
import EvenetItem from "../components/EventItem.js";

export default function EventDetailPage(){
    const data = useRouteLoaderData('event-detail');
    console.log(data,'oklk')
    return<> 
    <EvenetItem event={data.event}/>
    </>
 
}
export async function loader({request,params}){
    const id = params.eventId;
    const response =  await fetch('http://localhost:8080/events/'+id)
    if (!response.ok){ 
        throw json({message:'could not fetch..'},{status:500})
    }else{
        return response;
    }

}

export async function action({params,request}){
    const eventId = params.eventId
    const response = await fetch('http://localhost:8080/events/'+eventId,{
        method:request.method,
    })
    if(!response.ok){
        throw json({message:"Could not delete"},{status:500})
    }
    return redirect('/events');
}