import "./login.css";
import {Button} from "@material-ui/core";

const LoginPage = () => {
    return ( <div className="login__page">
        <div className="login__container">
            <img src="https://github.com/Moonwalkerr/filmzilla/blob/master/public/FilmZilla.png?raw=true" alt="" />
        <Button>Sign In With Google</Button>
        </div>
    </div> );
}
 
export default LoginPage;