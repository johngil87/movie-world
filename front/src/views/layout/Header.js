import React from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import {logoutUser, updateUser, seeForm} from "../../application/actions/user";
import { connect } from "react-redux";
import {getUser, getIsUpdating, getName, getImage} from "../../application/selectors/user";
import { useForm } from "react-hook-form";

const Header = ({logoutUser, updateUser, user, isUpdating, seeForm, name, image}) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    updateUser(user, data.nombre, data.imagen);
    seeForm(false);
    reset();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <div className="container">
          <Link to="/" className="navbar-brand text-success">Movie World</Link>
          <button className="navbar-toggler"type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
            <form className="form-inline my-2 my-lg-0">
              <div className="navbar-nav">
                <Link to="/movies" className="nav-link">Películas</Link>
                <Link to="/favorites" className={user ? "nav-link" : "d-none"}>Favoritas</Link>
                <Link to="/" className={user ? "nav-link ml-5" : "d-none"} onClick={logoutUser}>Salir</Link>
                <Link className={user ? "nav-link text-success" : "d-none"} onClick={() => seeForm(true)}>{name}</Link>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <div className={isUpdating ? "card w-25 updateForm" : "d-none"}>
        <div class="card-body">
        <button type="button" className="close" data-dismiss="alert" onClick={() => seeForm(false)}>&times;</button>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="title">Nombre:</label>
            <input className="form-control" defaultValue={name} type="text" placeholder="Nombre" name="nombre" id="nombre" {...register("nombre", { required: true })}></input>
          </div>
          <div className="form-group">
            <label htmlFor="imagen">Imagen:</label>
            <input className="form-control" defaultValue={image} type="text" placeholder="Imagen" name="imagen" id="imagen" {...register("imagen", { required: true })}></input>
          </div>
          <button className="btn btn-success btn-sm" type="submit">Actualizar</button>
        </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logoutUser, updateUser, seeForm }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    user: getUser(state),
    name: getName(state),
    image: getImage(state),
    isUpdating: getIsUpdating(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
