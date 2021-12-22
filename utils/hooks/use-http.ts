import { useState, useCallback } from "react";
import { I_HTTP_REQCONFIG } from "../../typings/hooks-type";

function useHttp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig: I_HTTP_REQCONFIG, applyData: (data) => void) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method || "GET",
          headers: requestConfig.headers || {},
          body: JSON.stringify(requestConfig.body) || null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        applyData(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHttp;
