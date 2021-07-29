import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {loginUser} from "../../application/actions/user";
import {connect} from "react-redux";
import {getUser} from "../../application/selectors/user";


const Home = ({loginUser, user}) => {
    
    const loginWithGoogleUser = () => {
        loginUser();
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <br/><br/>
                    <h1 className="cover-heading mt-5 font-weight-bold">
                        Welcome to Movie World <i className="bi bi-check2-square"/>
                    </h1>
                    <h4 className={"color-black mt-5"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat eget nibh eu tristique. Vestibulum suscipit odio ac rhoncus.
                    </h4>
                    <button className="mt-5 btn btn-primary px-4" onClick={loginWithGoogleUser}>
                        <i className="bi bi-google"/> Log in with Google
                    </button>
                    <br/><br/>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({loginUser}, dispatch);
}

const mapStateToProps = (state) => {
    return {
        user: getUser(state),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);