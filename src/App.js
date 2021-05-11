import './App.css';
import MoviesPage from './comps/moviespage';
import NavBar from './comps/navbar';
import {useState,useEffect} from "react";
import TRENDING_API_MOVIES from "./api/api";
// import SingleLineGridList from "./comps/gridListHorizontal";
function App() {
// Declaring movies state array
const [movies,setMovies] = useState([]);

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
},[])


  return (
    <div className="App">
      <NavBar fetchData={fetchData}/>
      <MoviesPage movies={movies}/>
      {/* <SingleLineGridList movies={movies}/> */}
      </div>
  );
}

export default App;
