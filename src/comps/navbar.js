import {useContext,useState} from "react";
import "./navbar.css";
import {SEARCH_API} from "../api/api";
import {StateContext} from "../context/stateProvider";

const NavBar = ({fetchData}) => {
    const [searching_movie_result, setSearchingMoviesResult] = useContext(StateContext).searching_movies_result
    console.log(searching_movie_result);
    const [searchValue, setsearchValue] = useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        fetchData(SEARCH_API + searchValue,setSearchingMoviesResult);
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
        <p>Your one stop to your favourite Entertainments . . .</p>
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