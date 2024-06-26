import PageContent from "../components/PageContent";
import {useRouteError} from 'react-router-dom'
import MainNavigation from "../components/MainNavigation";
export default function Error(){

    const error = useRouteError();
    let title= 'An Error Occured'
    let message = 'Something Went Wrong'
    if(error.status===500){
        message=error.data.message;
    }
    if(error.status===404){
        title= 'not found!!!!!'
        message = 'could not find resource'

    }
    return(
    <>
    <MainNavigation/>
    <PageContent title={title} >
        <p>{message}</p>
    </PageContent>
    </>)
}