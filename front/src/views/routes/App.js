import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { getUser } from "../../application/selectors/user";
import { connect } from "react-redux";

import Home from "../pages/Home";
import Header from "../layout/Header";
import AllMovies from "../pages/AllMovies";
import NotFoundPage from "../pages/NotFoundPage";
import Favorites from "../pages/Favorites";
import Movie from "../pages/Movie";




export const PrivateRoute = ({component: Component, user, ...rest}) => {
    return (
        <Route {...rest} render={(props) =>
            user ? (<Component {...props} />) : (
                <Redirect to={{pathname: "/", state: {from: props.location}}}/>)}
        />
    )
}

const App = ({user}) => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/movies"} component={AllMovies}/>
                <PrivateRoute exact path={"/movie/:movieId"} component={Movie} user={user}/>
                <PrivateRoute exact path={"/favorites"} component={Favorites} user={user}/>
                <Route path={"*"} component={NotFoundPage}/>
            </Switch>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        user: getUser(state)
    }
}

export default connect(mapStateToProps)(App);
