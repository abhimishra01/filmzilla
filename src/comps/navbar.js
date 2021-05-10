import {useState} from "react";
import "./navbar.css";
import {SEARCH_API} from "../api/api";

const NavBar = ({getMovies}) => {
    const [searchValue, setsearchValue] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        getMovies(SEARCH_API + searchValue);
        setsearchValue("");
    }
    const handleSearch =()=>{}
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
            <button
            onClick={handleSearch}
            >User</button>
            <form onSubmit={handleSubmit}>
             <input
            onChange={handleChange}
            type="search" placeholder="Search..."/>
            </form>
        </div>
    </nav>
    </header>
     );
}
 
export default NavBar;