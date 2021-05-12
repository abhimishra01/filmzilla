import GridContainer from "./gridContainer";
import "./moviespage.css";
const MoviesPage = () => {
    
return ( <div className="movies__page">
       <GridContainer heading="Trending Today : Movies"  movieContainer={true} />
       <GridContainer heading="Trending Today : TV Shows" tvShowContainer={true} />
    </div> );    
}
 
export default MoviesPage;  