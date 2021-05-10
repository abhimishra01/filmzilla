import MovieCard from "./movieCard";
import "./moviespage.css";

const MoviesPage = ({movies}) => {
    
return ( <div className="movies__page">
        <MovieCard  movies={movies}/>
    </div> );    
}
 
export default MoviesPage;  