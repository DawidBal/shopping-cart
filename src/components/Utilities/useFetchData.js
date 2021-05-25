import  { useState, useEffect } from 'react';

export default function useFetchData(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
          const fetcher = await fetch(url);
          const data = await fetcher.json();
          setData(data);
          setLoading(false);
          } catch {
            setLoading(false);
            throw new Error("Error!");
          }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return [loading, data]
}