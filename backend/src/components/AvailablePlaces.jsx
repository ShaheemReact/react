import Places from './Places.jsx';
import { useState,useEffect } from 'react';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';


export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching,setIsFetching]  = useState(false);
  const [availablePlaces,setAvaialblePlaces] = useState([]);
  const [error,setError] = useState()
  useEffect(()=>{
    setIsFetching(true);
    async function fetchPlaces(){
    try {
      const places = await fetchAvailablePlaces()
      navigator.geolocation.getCurrentPosition((position)=>{
        const sortedPlace = sortPlacesByDistance(places,position.coords.latitude,position.coords.longitude)
        setAvaialblePlaces(sortedPlace)
        setIsFetching(false);
      })
    } catch (error) {
      console.log(error)
      setError({message: error.message || "could not fetch places please try again"});   
      setIsFetching(false);
    } 
    
    }
    fetchPlaces();
  },[])


  if(error){
    return <Error title="An Error occured" message={error.message}/>
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces} 
      fallbackText="No places available."
      isLoading={isFetching}
      fetchingPlaces= "Loading Places....."
      onSelectPlace={onSelectPlace}
    />
  );
}
