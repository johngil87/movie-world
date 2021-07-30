import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "../pages/Home";
import Header from "../layout/Header";
import AllMovies from "../pages/AllMovies";
import NotFoundPage from "../pages/NotFoundPage";
import Favorites from "../pages/Favorites";
import Movie from "../pages/Movie";

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/movies"} component={AllMovies}/>
                <Route exact path={"/favorites"} component={Favorites}/>
                <Route exact path={"/movie/:movieId"} component={Movie}/>
            </Switch>
        </Router>
    )
}

export default App;