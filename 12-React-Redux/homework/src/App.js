import React from "react";

import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path="/">
        <Buscador />
      </Route>
      <Route exact path="/favs">
        <Favorites />
      </Route>
      <Route path="/movie/:id" component={Movie} />
    </React.Fragment>
  );
}

export default App;
