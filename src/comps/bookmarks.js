import { CircularProgress } from "@material-ui/core";
import useFireStore from "../hooks/useFireStore";
import MovieCard from "./movieCard";
import {useParams} from "react-router-dom";

const Bookmarks = () => {

    const collectionName = useParams().content;
    console.clear();
    // console.log(collectionName); 
    const {isProgress,contentArray,error} = useFireStore(collectionName);
    
    if(error){
        alert(error.message);
    }
    if(isProgress){
    return <CircularProgress/>
    }
    
    const checkTvShow = () =>{
        if(collectionName === "tv_shows"){
            return true;
        }
        else{
            return null;
        }
    }
    return ( <div className="movies__page">
        <MovieCard contentArray={contentArray} tvShow={checkTvShow}/>
    </div>
    );
}
 
export default Bookmarks;