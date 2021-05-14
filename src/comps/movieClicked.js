import { CircularProgress } from "@material-ui/core";
import {useEffect, useState} from "react";
import {fetchData} from "../context/stateProvider";
import "./movieclicked.css";
import {useParams} from "react-router-dom";
import { IMAGE_API, DEFAULT_POSTER_Path} from "../api/api";

const movie_id = null;
const SEARCH_PARTICULAR_MOVIE_API = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=d7eb245562d608898cbbab8c823d0259&language=en-US`;
const MovieClicked = () => {

movie_id = useParams();

const [movieinfo, setMovieinfo] = useState([]);

useEffect(() => {
    fetchData(SEARCH_PARTICULAR_MOVIE_API, setMovieinfo);
},[SEARCH_PARTICULAR_MOVIE_API]);

const movie_data = movieinfo[0];
const poster_path = movie_data.poster_path;
const movie_title = movie_data.title;
const overview = movie_data.overview;
const rating = movie_data.vote_average;
const tagline = movie_data.tagline;
const status = movie_data.status;
// const homepage = movie_data.homepage;
const release_date = movie_data.release_date;

console.log(movie_data.poster_path);
    return ( 
        <div className="movie__clicked">
        {movieinfo.length > 0 || <CircularProgress/>}
     { <div className="movieCard">
         <img src={poster_path?IMAGE_API + poster_path : DEFAULT_POSTER_Path } alt={movie_title} />
         <div className="right_cardInfo">
                <h2>{movie_title}</h2>
                <h3>{tagline}</h3>
                <p className="overview">{overview}</p>
            <div className="more_info">
                    <h3 >Status : <span className="more_infoValue">{status}</span> </h3>
                    <h3>Release Date :  <span className="more_infoValue">{release_date}</span> </h3>
            </div>
         </div>
    <p className="rating"> {rating} </p>
     </div>
        } 
    </div> );
}
 
export default MovieClicked;