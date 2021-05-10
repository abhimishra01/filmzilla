import {useState} from "react";
import "./navbar.css";

const NavBar = () => {
    const [searchValue, setsearchValue] = useState("");
    
    const handleSubmit =()=>{

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