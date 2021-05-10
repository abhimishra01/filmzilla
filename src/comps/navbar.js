import {useState} from "react";
import "./navbar.css";

const NavBar = () => {
    const [searchValue, setsearchValue] = useState("");
    
    const handleChange = (e) => {
        setsearchValue(e.target.value);
        console.log(searchValue);
    }
    return ( 
    <header>
    <nav>
        <h1>Welcome to FilmZilla</h1>
        <p>Your one stop to fetch your favourite movies . . .</p>
        <div className="nav__keys">
            <button>User</button>
            <input
            onChange={handleChange}
            type="search" placeholder="Search..."/>
        </div>
    </nav>
    </header>
     );
}
 
export default NavBar;