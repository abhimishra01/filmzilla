import "./gridContainer.css"
import SingleLineGridList from "./gridListHorizontal";

const GridContainer = ({heading, contentArray}) => {
    return (  <div className="heading__trending">
                <h2>{heading}</h2>
                <SingleLineGridList movies={contentArray}/>
            </div> );
}
 
export default GridContainer;