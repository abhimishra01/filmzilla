import "./movieCard.css"
import {DEFAULT_POSTER_Path,IMAGE_API} from "../api/api";

const MovieCard = ({movies}) => {
    
    return (
        <>
        {/* Poster of the movie */}
        {movies && movies.map(movie =>{
            return (
                <div key={movie.id} className="movie__card">
        {/* If movie's poster path is available. show, otheriwse show a default poster img */}
        <img src={movie.poster_path?IMAGE_API + movie.poster_path : DEFAULT_POSTER_Path} alt="" />
        {/* Movie Card Header : Movie name & Rating */}
        <div className="movie__cardHeader">
            <h3>{movie.title}</h3>
            <p>{movie.vote_average}</p>
        </div>
        {/* Movie description : by default is hidden */}
        <div className="movie__cardDesc">
            <p>{movie.overview}</p>
        </div>
                </div>
            )
        })}
        
        </>
     );
}
 
export default MovieCard;