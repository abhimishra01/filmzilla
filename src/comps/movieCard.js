import "./movieCard.css"
import {DEFAULT_POSTER_Path,IMAGE_API} from "../api/api";

const MovieCard = ({contentArray, tvShow}) => {
    
    return (
        <>
        {/* Poster of the movie */}
        {contentArray && contentArray.map(tile =>{
            return (
                <div key={tile.id} className="movie__card">
        {/* If movie's poster path is available. show, otheriwse show a default poster img */}
        <img src={tile.poster_path?IMAGE_API + tile.poster_path : DEFAULT_POSTER_Path} alt="" />
        {/* Movie Card Header : Movie name & Rating */}
        <div className="movie__cardHeader">
            <h3>{tvShow ? tile.name : tile.title}</h3>
            {/* <p>{movie.vote_average}</p> */}
        </div>
        {/* Movie description : by default is hidden */}
        <div className="movie__cardDesc">
            <p>{tile.overview}</p>
        </div>
                </div>
            )
        })}
        
        </>
     );
}
 
export default MovieCard;