import { CircularProgress } from "@material-ui/core";
import useFireStore from "../hooks/useFireStore";
import MovieCard from "./movieCard";

const Bookmarks = (collectionName,tvShow) => {

    const {isProgress,contentArray,error} = useFireStore(collectionName);
    
    if(error){
        alert(error.message);
    }
    if(isProgress){
    return <CircularProgress/>
    }
    
    return ( <div className="movies__page">
        <MovieCard contentArray={contentArray} tvShow={tvShow}/>
    </div>
    );
}
 
export default Bookmarks;