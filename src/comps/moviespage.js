import GridContainer from "./gridContainer";
import MovieCard from "./movieCard";
import "./moviespage.css";
import {StateContext} from "../context/stateProvider"; 
import {useContext} from "react";
import { CircularProgress } from "@material-ui/core";

const MoviesPage = () => {

const [searchingTvResult] = useContext(StateContext).searching_tvShows_result[0];
const [searchingMovieResult] = useContext(StateContext).searching_movies_result[0];
const [searching, setSearching] = useContext(StateContext).searching;

if(searching) {
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
}

if(!searching){
    return ( <div className="movies__page">
        <GridContainer heading="Trending Today : Movies"  movieContainer={true} />
        <GridContainer heading="Trending Today : TV Shows" tvShowContainer={true} />
        </div> );    
} 
else {
    setSearching(null);
    return <CircularProgress/>
}

}
export default MoviesPage;  