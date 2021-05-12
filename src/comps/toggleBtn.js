import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import {useState,useContext} from "react";
import {fetchData,StateContext} from "../context/stateProvider";
import "./togglebtn.css";
import TRENDING_API_MOVIES,{TRENDING_API_TVSHOWS, TRENDING_API_TVSHOWS_BY_WEEK,TRENDING_API_MOVIES_BY_WEEK} from "../api/api";



export default function TrendingToggleButton(tvShow) {
  const [alignment, setAlignment] = useState("left");
  
  const [tvShows, setTvShows] = useContext(StateContext).tvShows_popular
  const [movies, setMovies] = useContext(StateContext).movies_popular
  
  console.log(movies,tvShows);
  console.log(TRENDING_API_TVSHOWS, TRENDING_API_MOVIES);


  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    fetchData(TRENDING_API_MOVIES,setMovies);
  };

  const toggleMoviesbyToday = ()=>{
  }
  const toggleShowsbyToday = () =>{
    fetchData(TRENDING_API_TVSHOWS,setTvShows);
  }
  const toggleShowsbyWeek = () =>{
    fetchData(TRENDING_API_TVSHOWS_BY_WEEK,setTvShows);
  }

  const toggleMoviesbyWeek = () =>{
    fetchData(TRENDING_API_MOVIES_BY_WEEK,setMovies);
  }

  return (
    <ToggleButtonGroup
    value={alignment}
    exclusive
    onChange={handleAlignment}
      aria-label="text alignment"
      >
      <ToggleButton
      onClick={tvShow?toggleShowsbyToday:toggleMoviesbyToday}
      style={{color:"var(--secondary)",fontSize:"0.8rem",padding:"0.98rem", fontFamily:"Rubik, sans-serif"}}  
      value="left" aria-label="left aligned">
        Today
      </ToggleButton>
        onClick={tvShow?toggleShowsbyWeek:toggleMoviesbyWeek}
      <ToggleButton 
        style={{color:"var(--secondary)",fontSize:"0.8rem",padding:"0.98rem", fontFamily:"Rubik, sans-serif"}}  
      value="center" 
      aria-label="centered">
        This Week
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
