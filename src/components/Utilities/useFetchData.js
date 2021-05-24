import  { useState, useEffect } from 'react';

export default function useFetchData(url) {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const fetcher = await fetch(url);
        const data = await fetcher.json();
        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return data
}