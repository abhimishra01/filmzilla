import "./login.css";
import {Button} from "@material-ui/core";
import {auth,google_provider} from "../keys/firebaseConfig";
import {useContext} from "react";
import {StateContext} from "../context/stateProvider";

const LoginPage = () => {

// Fetching the user state from our context API layer :
const [user,setUser] = useContext(StateContext).user


const loginIwithGoogle = () =>{
    auth.signInWithPopup(google_provider)
    .then(res=>{
       
        setUser(res.user);
        console.log(user);
    }).catch(err=>{alert(err.message)});
}

return ( <div className="login__page">
        <div className="login__container">
            <img src="https://github.com/Moonwalkerr/filmzilla/blob/master/public/FilmZilla.png?raw=true" alt="" />
        <Button onClick={loginIwithGoogle}>Sign In With Google</Button>
        </div>
    </div> );
}
 
export default LoginPage;