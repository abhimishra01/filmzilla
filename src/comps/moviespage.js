import GridContainer from "./gridContainer";
import MovieCard from "./movieCard";
import "./moviespage.css";
import {StateContext} from "../context/stateProvider"; 
import {useContext} from "react";

const MoviesPage = () => {

const [searchingTvResult] = useContext(StateContext).searching_tvShows_result[0];
const [searchingMovieResult] = useContext(StateContext).searching_movies_result[0];

if(searchingTvResult){
    return (<div className="movies__page">
        <MovieCard contentArray={searchingTvResult} tvShow={true}/>
    </div> )
}

if(searchingMovieResult){
    return (<div className="movies__page">
        <MovieCard contentArray={searchingMovieResult}/>
    </div> )
}

return ( <div className="movies__page">
       <GridContainer heading="Trending Today : Movies"  movieContainer={true} />
       <GridContainer heading="Trending Today : TV Shows" tvShowContainer={true} />
    </div> );    
}
 
export default MoviesPage;  