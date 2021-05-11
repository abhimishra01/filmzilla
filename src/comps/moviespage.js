import "./moviespage.css";
import SingleLineGridList from "./gridListHorizontal";

const MoviesPage = ({movies}) => {
    
return ( <div className="movies__page">
            <div className="heading__trending">
                <h2>Trending Today</h2>
      <SingleLineGridList movies={movies}/>
            </div>

    </div> );    
}
 
export default MoviesPage;  