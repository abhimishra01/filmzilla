import "./movieCard.css"
import {DEFAULT_POSTER_Path} from "../api/api";

const MovieCard = ({movies}) => {
    
    return (
        <>
        {/* Poster of the movie */}
        {movies && movies.map(movie =>{
            return (
                <div className="movie__card">
        <img src={DEFAULT_POSTER_Path} alt="" />
        {/* Movie Card Header : Movie name & Rating */}
        <div className="movie__cardHeader">
            <h3></h3>
            <p>5.7</p>
        </div>
        {/* Movie description : by default is hidden */}
        <div className="movie__cardDesc">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, iste culpa sit nostrum id laudantium unde, aliquam suscipit vitae ad ipsum, cumque fugit atque blanditiis dolore? Ab consequatur mollitia deserunt?</p>
        </div>
                </div>
            )
        })}
        
        </>
     );
}
 
export default MovieCard;