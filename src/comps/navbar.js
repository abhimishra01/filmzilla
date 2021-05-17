import { useContext, useState } from "react";
import "./navbar.css";
import { SEARCH_API } from "../api/api";
import { StateContext } from "../context/stateProvider";
import NavUserMenu from "./navUserMenu";

const NavBar = ({ fetchData }) => {
  // Fetching pieces of search states from context layer
  const [searching_movie_result, setSearchingMoviesResult] =
    useContext(StateContext).searching_movies_result;
  const [searching, setSearching] = useContext(StateContext).searching;

  console.log(searching_movie_result);
  console.log(searching);

  const [searchValue, setsearchValue] = useState("");

  // SearchBox Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearching(true);
    await fetchData(SEARCH_API + searchValue, setSearchingMoviesResult);
  };

  // Searchbox clear Handler

  // Search field Change handler
  const handleChange = (e) => {
    if (e.target.value === "") {
      setSearching(null);
    }
    setsearchValue(e.target.value);
  };
  return (
    <header>
      <nav>
        <h1>Welcome to FilmZilla</h1>
        <p>Your one stop to your favourite Entertainments . . .</p>
        <div className="nav__keys">
          <div className="nav__userBtn">
            <NavUserMenu />
          </div>
          {/* <NavUserBtn/> */}
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="search"
              placeholder="Search Movies or Shows.."
            />
          </form>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
