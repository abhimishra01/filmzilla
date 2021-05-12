import GridContainer from "./gridContainer";
import "./moviespage.css";
const MoviesPage = () => {
    
return ( <div className="movies__page">
       <GridContainer heading="Trending Today : Movies" />
       <GridContainer heading="Trending Today : TV Shows" />
    </div> );    
}
 
export default MoviesPage;  