import { Link, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation } from '@tanstack/react-query';
import { createNewEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { queryClient } from '../../util/http.js';
export default function NewEvent() {
  const { mutate,isPending,isError,error }=useMutation({
    mutationFn: createNewEvent,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['events']});
      navigate('/events'); 
    }
  })
  const navigate = useNavigate();

  function handleSubmit(formData) {
    console.log(formData,'pp')
    mutate({event :formData});
  }
  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        {isPending&&'submitting...'}
        {!isPending&&(<>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>)}
        {isError &&<ErrorBlock title="Failed TO Create Event" message={error.info?.message|| "failed"}/>}
      </EventForm>
    </Modal>
  );
}
