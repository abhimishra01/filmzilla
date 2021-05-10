import MovieCard from "./movieCard";
import {useState,useEffect} from "react";
import "./moviespage.css";
import DEFAULT_API from "../api/api";

const MoviesPage = () => {

// Declaring movies state array
const [movies,setMovies] = useState([]);

// Function to fetch movies from an api
const getMovies = (api) =>{
    fetch(api).then(res=>{
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
    getMovies(DEFAULT_API);
},[])

return ( <div className="movies__page">
        <MovieCard  movies={movies}/>
    </div> );    
}
 
export default MoviesPage;  