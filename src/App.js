import './App.css';
import MoviesPage from './comps/moviespage';
import NavBar from './comps/navbar';
import {useState,useEffect} from "react";
import TRENDING_API from "./api/api";

function App() {
// Declaring movies state array
const [movies,setMovies] = useState([]);

// Function to fetch movies from an api
const getMovies = async(api) =>{
    await fetch(api).then(res=>{
        if(!res.ok){
            alert("Something Went Wrong !");
        }
        return res.json();
    }).then(data=>{
        setMovies(data.results);
        console.log(data.results);
    }).catch(err=>alert(err.message));
}

useEffect(()=>{
    getMovies(TRENDING_API);
},[])


  return (
    <div className="App">
      <NavBar getMovies={getMovies}/>
      <MoviesPage movies={movies}/>
      </div>
  );
}

export default App;
