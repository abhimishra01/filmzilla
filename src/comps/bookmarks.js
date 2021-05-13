import "./bookmarks.css";
import {Button} from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import useFireStore from "../hooks/useFireStore";
import MovieCard from "./movieCard";
import {useParams,useHistory} from "react-router-dom";

const Bookmarks = () => {

    const history = useHistory();
    const collectionName = useParams().content;
    const {inProgress,contentArray} = useFireStore(collectionName);
    const checkTvShow = () =>{
        if(collectionName === "tv_shows"){
            return true;
        }
        else{
            return null;
        }
    }

    const backToHome = () => {
        history.push("/");
    }

    if(inProgress === false && contentArray.length === 0){
        return ( <div className="no__bookmarks">
            <h2>No Bookmarks yet ! <Button  onClick={backToHome} className="homeBtn">Back To Home</Button></h2>
             </div>)
    }

    return ( <div className="bookmarks__page">
        {inProgress &&  <div className="loading"><CircularProgress className="circular__progress"/> 
        </div> }
      {contentArray.length > 0 &&  <MovieCard contentArray={contentArray} tvShow={checkTvShow} bookmark={true}/> }
    </div>
    );
}
 
export default Bookmarks;