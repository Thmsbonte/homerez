import "./App.scss";

// Services import
import { useSearchRequest } from "./services/useSearchRequest";

// Components import
import { Navigation } from "./navigation/Navigation";

// Interface import
import { ISearchRequestHook } from "./interfaces/interfaces";

const App = () => {
  // Search custom hook declared at the root of the App for data persisting purpose
  const searchRequestHook: ISearchRequestHook = useSearchRequest();

  return <Navigation searchRequestHook={searchRequestHook} />;
};

export default App;
