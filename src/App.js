import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import CharactersFilter from "./components/CharactersFilter";
import Character from "./components/Character";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/CharactersFilter/" />
        <Route exact path="/CharactersFilter" component={CharactersFilter} />
        <Route
          path="/CharactersFilter/:filter/:id"
          component={CharactersFilter}
        />
        <Route path="/Character/:id" component={Character} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
