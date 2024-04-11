import { useEffect,useState } from "react";

export  function useFetch(fetchfn,initialValue){
    const [isFetching, setIsFetching] = useState(initialValue);
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try { 
            const places = await fetchfn();
            setFetchedData(places);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch Data' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchfn]);
      return {
        isFetching,
        error,
        fetchedData,
        setFetchedData,
      }
}