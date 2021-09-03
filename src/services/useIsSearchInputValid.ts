import { useState } from "react";

/* Custom hook handeling search input validation / error message*/
export const useIsSearchInputValid = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const isSearchInputValid = (search: string) => {
    setErrorMessage("");
    // Match any string that contains at least one non-space character
    const searchRegex = new RegExp(/[A-Za-z0-9]+/);

    // Case search input is valid
    if (search && searchRegex.test(search)) {
      return true;
    }

    // Case search input is empty => allow to clean search result, no error message
    if (search === "") {
      setErrorMessage("");
      return false;
    }
    setErrorMessage(
      "Please enter a search with at least one letter or one number"
    );
    return false;
  };
  return { isSearchInputValid, errorMessage };
};
