import React from 'react';
import { Link } from "react-router-dom";
import {bindActionCreators} from "redux";
import {logoutUser} from "../../application/actions/user"; 
import {connect} from "react-redux";
import {getUser} from "../../application/selectors/user";


const Header = ({logoutUser, user}) => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container">
        <Link to="/" className="navbar-brand">Movie World</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="navbar-nav">
              <Link to="/movies" className="nav-link">Movies</Link>
              <Link to="/favorites" className={user ? "nav-link": "d-none"}>Favorites</Link>
              <Link to="/" className={user ? "nav-link": "d-none"} onClick={logoutUser}>Logout</Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logoutUser}, dispatch); 
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);