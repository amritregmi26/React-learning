import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(url);
            let result = await response.json()

            setData(result);
        }
        fetchData();
    }, [url])

    return { data }
}

export default useFetch;