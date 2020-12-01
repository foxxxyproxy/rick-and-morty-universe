import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import CharactersList from "./components/CharactersList";
import Character from "./components/Character";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/CharactersList" />
        <Route exact path="/CharactersList" component={CharactersList} />
        <Route exact path="/Character/:id" component={Character} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
