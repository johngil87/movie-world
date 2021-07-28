import {auth} from "../firebase";
import {signInWithGoogle} from "../auth";

export default {
    getUser: () =>{
        return {
            userEmail:auth().currentUser.email,
            /*userUid:auth().currentUser.uid
            photoURL:auth().currentUser.photoURL*/
        }
    },
    authUserWithGoogle: ()=>{
        return signInWithGoogle();
    },
}