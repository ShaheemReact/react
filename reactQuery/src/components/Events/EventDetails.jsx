import { Link, Outlet, useNavigate } from 'react-router-dom';

import Header from '../Header.jsx';
import { deleteEvent, fetchEvent,queryClient } from '../../util/http.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';
export default function EventDetails() {
  const [isDeleting,setIsDeleting] = useState()
  const params = useParams();
  const navigate = useNavigate();

  const {data,isPending,isError} =  useQuery({
    queryKey:['events',params.id],
    queryFn:() => fetchEvent({id:params.id})
  })
  const {mutate,isPending: isPendingDeletion } = useMutation({
    mutationFn: deleteEvent,
    onSuccess:()=>{
      queryClient.invalidateQueries({
        queryKey:['events'],
        refetchType:'none'
      })
      navigate('/events');
    }
  })
  function handleStartDelete(){
    setIsDeleting(true)
  }
  function handleStopDelete(){
    setIsDeleting(false)
  }
  function handleDelete(){
    mutate({id:params.id})
    
  }
  console.log(data) 
  console.log(isPending)
  console.log(isError)


  let content;
  if(isPending){
    content = <div id='event-details-content' className='center'><p>Fetching Data</p></div>
  }
  if (isError){
    content = <div id='event-details-content' className='center'><p>Error</p>
        <ErrorBlock title="Failed to load" message="please check again"/>
</div>

  }
  if(data){
    content = (<>
      <header>
      <h1>{data.title}</h1>
       <nav>
         <button onClick={handleStartDelete}>Delete</button>
         <Link to="edit">Edit</Link>
       </nav>
     </header>
     <div id="event-details-content">
    <img src={`http://localhost:3000/${data.image}`} alt="img" />
   <div id="event-details-info">
      <div>
        <p id="event-details-location">{data.location}</p>
        <time dateTime={`Todo-DateT$Todo-Time`}>{data.date}@{data.time}</time>
      </div>
      <p id="event-details-description">{data.description}</p>
    </div>
  </div>
  </>)
  
  }



  return (
    <>
    {isDeleting&&<Modal onClose={handleStopDelete}><h2>Are You Sure</h2>
    <div className='form-action'>
      {isPendingDeletion && <p>Deleting,Please wait...........</p>}
      {!isPendingDeletion&&(<>
     <button onClick={handleStopDelete} className='button-text'>Cancel</button>
      <button onClick={handleDelete} className='button'>Sure</button>
      </>
      )}
      </div></Modal>}

      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
       <article id="event-details">

        {content}
        
      </article> 
    </>
  );
}
