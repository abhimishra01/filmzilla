import GridContainer from "./gridContainer";
import "./moviespage.css";


const MoviesPage = ({movies,tvShows}) => {
    
return ( <div className="movies__page">
       <GridContainer heading="Trending Today" contentArray={movies}/>
    </div> );    
}
 
export default MoviesPage;  