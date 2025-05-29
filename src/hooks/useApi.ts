
import { useState, useEffect } from 'react';
import axios from 'axios';

interface UseApiOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  headers?: Record<string, string>;
  immediate?: boolean;
}

export const useApi = <T>({ url, method = 'GET', data, headers, immediate = true }: UseApiOptions) => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await axios({
        url,
        method,
        data,
        headers,
      });
      setResponse(result.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [url, immediate]);

  return { response, loading, error, execute };
};
