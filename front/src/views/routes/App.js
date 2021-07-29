import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "../pages/Home";
import Header from "../layout/Header";
import AllMovies from "../pages/AllMovies";

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/movies"} component={AllMovies}/>
            </Switch>
        </Router>
    )
}

export default App;