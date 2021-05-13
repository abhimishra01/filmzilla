import { CircularProgress } from "@material-ui/core";
import useFireStore from "../hooks/useFireStore";
import MovieCard from "./movieCard";
import {useParams} from "react-router-dom";

const Bookmarks = () => {

    const collectionName = useParams().content;
    const {inProgress,contentArray} = useFireStore(collectionName);

    console.log(inProgress);
    const checkTvShow = () =>{
        if(collectionName === "tv_shows"){
            return true;
        }
        else{
            return null;
        }
    }

    if(inProgress == false && contentArray.length == 0){
        return ( <div className="no__bookmarks">
            <h2>No Bookmarks yet !</h2>
             </div>)
    }
    return ( <div className="movies__page">
        {inProgress &&  <CircularProgress className="circular__progress"/> }
      {contentArray.length > 0 &&  <MovieCard contentArray={contentArray} tvShow={checkTvShow} bookmark={true}/> }
    </div>
    );
}
 
export default Bookmarks;