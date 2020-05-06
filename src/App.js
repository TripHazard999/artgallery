import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Artists from "./Components/Artists/Artists";
import ArtistsInfo from "./Components/ArtistsInfo/ArtistInfo";
import Gallery from "./Components/Gallery/Gallery";
import Login from "./Components/Login/Login";
import PaintingStyles from "./Components/PaintingStyles/PaintingStyles";
import PaintingStylesInfo from "./Components/PaintingStylesInfo/PaintingStylesInfo";

export default function App() {
  return (
    <Router>
      <ul className="navmenu" >
        <Link to="/">Gallery</Link>
        <Link to="/artists">Artists</Link>
        <Link to="/paintingstyles">Painting Styles</Link>
        
        <Link to="/login">Login</Link>
      </ul>

    <Switch>
      <Route exact path="/artists">
        <Artists />
      </Route>
      <Route exact path="/artists/:artistId">
        <ArtistsInfo />
      </Route>
      <Route exact path="/paintingstyles">
        <PaintingStyles />
      </Route>
      <Route exact path="/paintingstyles/:styleId">
        <PaintingStylesInfo />
      </Route>
      
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Gallery />
      </Route>
    </Switch>

    </Router>
  );
}


