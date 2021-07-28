import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={Home}/>
            </Switch>
        </Router>
    )
}

export default App;