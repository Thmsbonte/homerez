// Import libraries
import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

/* Custom hook handeling GET request, loading state and request error messages*/
export const useAxiosGet = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const axiosGetRequest = async <T extends any>(
    URL: string,
    config?: AxiosRequestConfig
  ): Promise<T | void> => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await axios.get<any>(URL, config);
      // client received an successfull response (2xx)
      if (response.status.toString()[0] === "2") {
        setIsLoading(false);
        return response.data;
      } else {
        setIsLoading(false);
        setErrorMessage("An error occured, please retry");
      }
    } catch (error: any) {
      if (error?.response) {
        // client received an error response (5xx, 4xx)
        if (error.response.status === 404) {
          setErrorMessage(
            "Page unknown. Tips : a proper noun needs to start with a capital letter."
          );
        } else {
          setErrorMessage("An error occured on server side, please retry");
        }
      } else if (error?.request) {
        // client never received a response, or request never left
        setErrorMessage("Network error, please retry");
      } else {
        setErrorMessage("An error occured, please retry");
      }
      setIsLoading(false);
    }
  };

  return { axiosGetRequest, isLoading, errorMessage };
};
