import GridContainer from "./gridContainer";
import "./moviespage.css";


const MoviesPage = ({movies,tvShows}) => {
    
return ( <div className="movies__page">
       <GridContainer heading="Trending Today : Movies" contentArray={movies}/>
       <GridContainer heading="Trending Today : TV Shows" contentArray={tvShows}/>
    </div> );    
}
 
export default MoviesPage;  