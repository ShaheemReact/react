import { Link, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import { useParams } from 'react-router-dom';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
// import NewEvent from './  NewEvent.jsx';

export default function EditEvent() {
  const params = useParams()
  const {data,isPending,isError,error} = useQuery({
    queryKey:['events',params.id],
    queryFn:()=>fetchEvent({id:params.id}) 
  })

  // const {mutate} = useMutation({
  //   mutationFn:updateEvent,
  //   onMutate:async (data)=>{
  //     await queryClient.cancelQueries({queryKey:['events',params.id]});
  //     const previousEvent = queryClient.getQueryData(['events',params.id]);

  //     queryClient.setQueryData(['events',params.id],NewEvent);

  //     return { previousEvent }

  //   },
  //   onError:(error,data,context)=>{
  //     queryClient.setQueryData(['events',params.id],context.previousEvent);
  //   },
  //   onSettled:()=>{
  //     queryClient.invalidateQueries(['events',params.id])
  //   }
  // });
  const navigate = useNavigate();

  function handleSubmit(formData) {
    // mutate({id:params.id,EditEvent:formData });
    navigate('../ ');
  }

  function handleClose() {
    navigate('../');
  }
  let content;
  if(isPending){
    content = <div className='center'><LoadingIndicator/></div>
  }
  if(isError){
    content = <>
    <ErrorBlock  title="error occured " message={error.info?.message}/>
    <div className='form-actions'>
      <Link to="../"  className='button'>Okay</Link>
    </div>
    </>
  }
  if(data){
    content = <>
    <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    </>
  }
  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}



// react router approch
// export function loader({params}){
//   return queryClient.fetchQuery({
//     queryKey:['events',params.id],
//     queryFn:({signal})=> fetchEvent({signal,id:params.id}),

//   })
// }
