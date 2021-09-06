import "./Home.scss";

// Libraries import
import { useState, KeyboardEvent, ChangeEvent } from "react";
import { debounce } from "lodash";

// Components import
import { MainTitle } from "../../display/MainTitle/MainTitle";
import { AppLink } from "../../display/AppLink/AppLink";
import { SearchInput } from "../../display/SearchInput/SearchInput";
import { Button } from "../../display/Button/Button";
import { Results } from "../../view/Results/Results";
import { Header } from "../../view/Header/Header";
import { Loading } from "../../display/Loading/Loading";
import { ErrorMessage } from "../../display/ErrorMessage/ErrorMessage";

// Constants import
import { red, blue } from "../../../constants/colors";

// Interface import
import { ISearchRequestHook } from "../../../interfaces/interfaces";

// Component interface
interface Props {
  searchRequestHook: ISearchRequestHook;
}

export const Home = ({ searchRequestHook }: Props) => {
  const [search, setSearch] = useState<string>("");
  // Search custom hook is declared at the root of the app for data persiting purpose and is retrieved through props
  const {
    searchRequest,
    setSearchResponse,
    searchResponse,
    isLoading,
    errorMessage,
  } = searchRequestHook;

  /* Events handlers */

  // Send search request when clicking on search button and save response in state. Debounce function to avoid successive calls.
  const handleSearchOnClick = debounce(
    () => {
      searchRequest(search);
    },
    350,
    { leading: true }
  );

  // Send search request when pressing on enter key and save response in state. Debounce function to avoid successive calls.
  const handleSearchOnPress = debounce(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.code === "Enter") {
        searchRequest(search);
      }
    },
    350,
    { leading: true }
  );

  // Save user search input in sate
  const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(() => {
      return event.target.value;
    });
  };

  return (
    <div className="home">
      <Header>
        <div className="home-header">
          <MainTitle title="Wiki search" />{" "}
          <AppLink title="Liked" color={red} to="/liked" />
        </div>
      </Header>

      <SearchInput
        title="Page title"
        placeholder={'Try "Paris" or "Marseille"'}
        onChange={onSearchInputChange}
        onKeyPress={handleSearchOnPress}
        value={search}
      />
      <Button
        title="Search"
        backgroundColor={blue}
        color="white"
        onClick={handleSearchOnClick}
      />
      {isLoading ? (
        <Loading />
      ) : errorMessage ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        searchResponse && (
          <Results
            searchResponse={searchResponse}
            setSearchResponse={setSearchResponse}
          />
        )
      )}
    </div>
  );
};
