import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { links } from '../constants/links';
import Header from '../Components/Header/Header';
import Artists from '../Components/Artists/Artists';
import Gallery from '../Components/Gallery/Gallery';
import Login from '../Components/Login/Login';
import PaintingStyles from '../Components/PaintingStyles/PaintingStyles';

const Routes = () => {
    return (
        <Router>
            <Header />

            <Switch>
                <Route exact path={links.ARTISTS_PAGE}>
                    <Artists />
                </Route>
                <Route exact path={links.PAINTING_STYLES_PAGE}>
                    <PaintingStyles />
                </Route>
                
                <Route path={links.LOGIN_PAGE}>
                    <Login />
                </Route>
                <Route path={links.GALLERY_PAGE}>
                    <Gallery />
                </Route>
                
            </Switch>
        </Router>
    );
};

export default Routes;
