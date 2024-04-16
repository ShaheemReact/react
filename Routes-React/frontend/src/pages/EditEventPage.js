import {  useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditPage(){
    const data = useRouteLoaderData('event-detail')
    return <EventForm event={data.event} method="patch"/>
}       