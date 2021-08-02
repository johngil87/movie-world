import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { loginUser } from "../../application/actions/user";
import { setLoading } from "../../application/actions/ui";
import { connect } from "react-redux";
import { getLoading } from "../../application/selectors/ui";
import { getUser } from "../../application/selectors/user";
import { getRedirecting } from "../../application/selectors/ui";
import { Redirect } from "react-router-dom";

const Home = ({ loginUser, loading, setLoading, user, redirecting }) => {
  useEffect(() => {
    setLoading(false);
  }, []);

  if (redirecting) {
    return <Redirect to="/movies" />;
  }

  const loginWithGoogleUser = () => {
    loginUser();
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-3" />
        {loading ? (
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="col-md-6">
            <br />
            <br />
            <hr></hr>
            <h1 className="cover-heading mt-5 font-weight-bold">¡Bienvenido a Movie World!<i className="bi bi-check2-square" />
            </h1>
            <h4 className={"color-black mt-5"}>
              En este sitio encontraras información sobre todas las películas de tu interés, ingresa con tu usuario para empezar a navegar
            </h4>
            <button className={user ? "d-none" : "mt-5 btn btn-primary px-4"} onClick={loginWithGoogleUser}>
              <i className="bi bi-google" /> Log in with Google
            </button>
            <br /><br />
            <hr></hr>
          </div>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginUser, setLoading }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    loading: getLoading(state),
    user: getUser(state),
    redirecting: getRedirecting(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
