// Libraries import
import { useState } from "react";

// Services import
import { useAxiosGet } from "./useAxiosGet";
import { useIsSearchInputValid } from "./useIsSearchInputValid";
import { cleanSearchInput } from "./cleanSearchInput";
import { isPageLiked } from "./isPageLiked";

// Interfaces import
import { ISearchResponse } from "../interfaces/interfaces";

/* Custom hook handeling search input validation and Wikipedia API request*/
export const useSearchRequest = () => {
  const [searchResponse, setSearchResponse] = useState<ISearchResponse | null>(
    null
  );
  const {
    axiosGetRequest,
    isLoading,
    errorMessage: axiosErrorMessage,
  } = useAxiosGet();
  const { isSearchInputValid, errorMessage } = useIsSearchInputValid();

  /* Events handlers */
  // Send search request and save response in state
  const searchRequest = async (search: string) => {
    // Clean user search input
    const cleanSearch = cleanSearchInput(search);
    // Check is search input format is valid before sending request
    if (isSearchInputValid(cleanSearch)) {
      // If search input is the same as previous search saved in state, no API call
      if (cleanSearch !== searchResponse?.title) {
        const response = await axiosGetRequest<any>(
          `${process.env.REACT_APP_WIKEPEDIA_API_URL}/${cleanSearch}`
        );

        // Check if page is already liked
        const pageLiked = isPageLiked(response?.title);

        // Save answer in state
        setSearchResponse(() => {
          return {
            type: response?.type,
            title: response?.title || "Title unknown",
            description: response?.description || "Description unknown",
            extract: response?.extract || "Extract unknown",
            isliked: pageLiked,
          };
        });
        return;
      }
      return;
    }

    // If input is invalid, empty search result state
    setSearchResponse(() => null);
    return;
  };

  return {
    searchRequest,
    searchResponse,
    setSearchResponse,
    isLoading,
    errorMessage: errorMessage ? errorMessage : axiosErrorMessage,
  };
};
