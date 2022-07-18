const { useState, useEffect } = require('react');

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok)
                    throw Error('Could not fetch the data for that resource');
                const jsonData = await response.json();
                setData(jsonData);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;
