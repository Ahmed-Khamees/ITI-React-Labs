import { useEffect, useState } from "react";
import axios from 'axios';

const useGetDataFromAPI = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get(url)
                setData(response.data);
                setLoading(false);
            }catch (err){
                setLoading(false);
                setError(err.message);
            }
        }
        setLoading(true);
        getData();
    }, [url]);

    return {data: data, loading: loading, error: error};
}

export default useGetDataFromAPI;