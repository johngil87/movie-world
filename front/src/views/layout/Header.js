import React from 'react';
import { Link } from "react-router-dom";
import {bindActionCreators} from "redux";
import {logoutUser, updateUser, seeForm} from "../../application/actions/user"; 
import {connect} from "react-redux";
import {getUser, getIsUpdating} from "../../application/selectors/user";
import { useForm } from "react-hook-form";


const Header = ({logoutUser, updateUser, user, isUpdating, seeForm}) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    updateUser(user, data.nombre, data.imagen)
  };

  return(
    <div>
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
              <Link className={user ? "nav-link": "d-none"} onClick={() => seeForm(true)}>Modificar usuario</Link>
            </div>
          </form>
        </div>
      </div>
    </nav>

    <div className= {isUpdating ? "container" : "d-none"}>
      <button onClick={() => seeForm(false)}>cerrar</button>
      <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Nombre:</label>
          <input className="form-control" type="text" placeholder="Nombre" name="nombre" id="nombre" {...register("nombre")}></input>
        </div>
        <div className="form-group">
          <label htmlFor="imagen">Imagen:</label>
          <input className="form-control" type="text" placeholder="Imagen" name="imagen" id="imagen" {...register("imagen")}></input>
        </div>
        <button className="btn btn-success" type="submit">Modificar</button>
      </form>
    </div>

    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logoutUser, updateUser, seeForm}, dispatch); 
}

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
    isUpdating: getIsUpdating(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);