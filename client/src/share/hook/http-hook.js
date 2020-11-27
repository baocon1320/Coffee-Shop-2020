import { useState, useRef, useEffect, useCallback } from 'react';

function useHttpClient() {
    const [error, setError] = useState();
    const [alert, setAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const activeHttpRequests = useRef([]);

    function alertHandler() {
        setAlert(false);
    }

   
        const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
            setIsLoading(true);
            const httpAbortCtrl =  new AbortController();
            activeHttpRequests.current.push(httpAbortCtrl)
            try {
                const response = await fetch(
                    url, {method, body, headers, signal: httpAbortCtrl.signal}
                );
                const responseData = await response.json();

                activeHttpRequests.current = activeHttpRequests.current.filter(reCtrl  => reCtrl !== httpAbortCtrl);

                // Thow error if the response code is 400 or 500 level
                if (!response.ok) {
                    //console.log(responseData.message + " response code " + response.status);
                    throw new Error(responseData.message + " response code " + response.status);
                }

                setIsLoading(false);
                return responseData

                // catching error
            } catch (err) {
                //console.log("homepage error " + err.message);
                setAlert(true);
                setError(err.message);
                setIsLoading(false);
                throw err;  
            }
            
        }, []);

        useEffect(()=>{
            return () => {
                activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abortCtrl());
            };
        }, []);
    
    return {isLoading, alert, error, sendRequest, alertHandler};

} 

export default useHttpClient;