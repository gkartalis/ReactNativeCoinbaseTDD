import {useState, useEffect} from 'react';
import axios from 'axios';

const useDataFetching = endpoint => {
  
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  

  const useFetchData = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(endpoint);
      const {data} = result;
      setErrorMessage('');
      setData(data);
      setIsLoading(false);
    } catch (err) {
      setErrorMessage(err.error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    useFetchData()
  },[]);

  return {
    data,
    isLoading,
    errorMessage
  };
};

export default useDataFetching;
