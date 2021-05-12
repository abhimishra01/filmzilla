import "./gridContainer.css"
import SingleLineGridList from "./gridListHorizontal";
import {useContext} from "react";
import {StateContext} from "../context/stateProvider";
// import { CircularProgress } from '@material-ui/core';

const GridContainer = ({heading, movieContainer, tvShowContainer}) => {

    const [movies] = useContext(StateContext).movies_popular[0];
    const [tvShows] = useContext(StateContext).tvShows_popular[0];
    return (  <div className="heading__trending">
                <h2>{heading}</h2>
                {movieContainer && movies && <SingleLineGridList contentArray={movies}/>}
                {tvShowContainer && tvShows && <SingleLineGridList contentArray={tvShows} tvShows={true}/>}
            </div> );
}
 
export default GridContainer;