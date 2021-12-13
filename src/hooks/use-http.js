import { useCallback, useState } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const requestData = useCallback(async(config, data)=> {
        setIsLoading(true);
        setError(null)
        try {
            const res = await fetch(config.url);
            if (!res.ok) {
                throw new Error('No data found');
            }
            const response = await res.json();
            data(response);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    return [isLoading, error, requestData];

}

export default useHttp;