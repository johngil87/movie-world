import {auth} from "../firebase";

export default {
    getUser: () =>{
        return {
            userName:auth().currentUser.displayName,
            userEmail:auth().currentUser.email,
            userImage:auth().currentUser.photoURL
        }
    },
    authUserWithGoogle: ()=>{
        return signInWithGoogle();
    },
}