// Libraries import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components import
import { Home } from "../components/page/Home/Home";
import { Liked } from "../components/page/Liked/Liked";

// Interface import
import { ISearchRequestHook } from "../interfaces/interfaces";

interface Props {
  searchRequestHook: ISearchRequestHook;
}

export const Navigation = ({ searchRequestHook }: Props) => {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/liked">
          <Liked />
        </Route>
        <Route path="/">
          <Home searchRequestHook={searchRequestHook} />
        </Route>
      </Switch>
    </Router>
  );
};
