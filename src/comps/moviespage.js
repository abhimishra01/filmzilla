// import MovieCard from "./movieCard";
import "./moviespage.css";
import SingleLineGridList from "./gridListHorizontal";

const MoviesPage = ({movies}) => {
    
return ( <div className="movies__page">
        {/* <MovieCard  movies={movies}/> */}
      <SingleLineGridList movies={movies}/>
    </div> );    
}
 
export default MoviesPage;  