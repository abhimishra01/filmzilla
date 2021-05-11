import './App.css';
import MoviesPage from './comps/moviespage';
import NavBar from './comps/navbar';
import {useState,useEffect} from "react";
import TRENDING_API_MOVIES, { TRENDING_API_TVSHOWS } from "./api/api";
// import SingleLineGridList from "./comps/gridListHorizontal";
function App() {
// Declaring movies state array
const [movies,setMovies] = useState([]);

const [tvShows, setTvShows] = useState([]);

// Function to fetch movies from an api
const fetchData = async(api,setter) =>{
    await fetch(api).then(res=>{
        if(!res.ok){
            alert("Something Went Wrong !");
        }
        return res.json();
    }).then(data=>{
        setter(data.results);
        console.log(data.results);
    }).catch(err=>alert(err.message));
}

useEffect(()=>{

    fetchData(TRENDING_API_MOVIES,setMovies);
    fetchData(TRENDING_API_TVSHOWS,setTvShows);
},[])


  return (
    <div className="App">
      <NavBar fetchData={fetchData}/>
      <MoviesPage 
      movies={movies}
      tvShows={tvShows}/>
      {/* <SingleLineGridList movies={movies}/> */}
      </div>
  );
}

export default App;
