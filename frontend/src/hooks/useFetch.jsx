import { useEffect, useState } from "react";

const useFetch = (uri) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(uri);
          const json = await res.json();
          setData(json);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
      fetchData();
    }, 1000);
  }, [uri]);

  return { data, loading, error };
};

export default useFetch;
