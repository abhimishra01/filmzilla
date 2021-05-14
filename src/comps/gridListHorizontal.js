import {useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import {IMAGE_API, DEFAULT_POSTER_Path} from "../api/api";
import "./gridListhz.css";
import TrendingToggleButton from './toggleBtn';
import BookmarkBorderTwoToneIcon from '@material-ui/icons/BookmarkBorderTwoTone';
import {StateContext} from "../context/stateProvider";                  
import fireStore,{timestamp} from "../keys/firebaseConfig";
import {Link} from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: "#ffff",
    fontSize:"0.87rem",
    fontFamily:"Poppins, sans-serif",
    fontWeight:"500",
    letterSpacing:"1px"
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.4) 100%)',
  },
  rating: {
    fontSize:"0.88rem",
    color:"#fff",
    margin:"4px",
  }
}));

export default function SingleLineGridList({contentArray, tvShows}) {
  const classes = useStyles();

  const [user,setUser] = useContext(StateContext).user
  console.log(setUser);
  // console.clear();
  
  const databaseRef = fireStore.collection(user.email);


  const addBookmark = ({title,overview,poster_path,vote_average})=>{
    if(tvShows){
      databaseRef.doc("bookmarks").collection("tv_shows").add({
        title:title,
        overview:overview,
        poster_path:poster_path,
        vote_average:vote_average,
        timestamp:timestamp,
      });
    }
    else{
      databaseRef.doc("bookmarks").collection("movies").add({
        title:title,
        overview:overview,
        poster_path:poster_path,
        vote_average:vote_average,
        timestamp:timestamp,
      });
    }
    alert("Added to bookmarks!");
  }


  return (
    <div className="trending_gridContainer">
      <div className="trending_gridContainerHead">
          <h2>{tvShows?"TV Shows" : "Movies"} Trending : <TrendingToggleButton tvShow={tvShows?tvShows:null}/>
          </h2>
          <Link to={`/bookmarks/${tvShows?"tv_shows":"movies"}`}>
        <IconButton>
            <BookmarkBorderTwoToneIcon className="bookmark__iconBtn" fontSize={"large"}/>
        </IconButton>
          </Link>
      </div>
      {  contentArray.length > 0 ? <div className={classes.root}>
      <GridList spacing={3} cellHeight={250} className={classes.gridList} cols={5.5}>
        {contentArray.map((tile) => (
          
          <GridListTile  key={tile.id}>
             <img src={tile.poster_path?IMAGE_API + tile.poster_path : DEFAULT_POSTER_Path} alt={tile.title} />
            <GridListTileBar
              title={tvShows ? tile.name : tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              subtitle={tile.vote_average}
              actionIcon={
                <IconButton onClick={()=> addBookmark({title : tvShows ? tile.name: tile.title,overview:tile.overview,vote_average:tile.vote_average,poster_path:tile.poster_path})} aria-label={`star ${tile.title}`}>
                  <BookmarkBorderTwoToneIcon className="star" fontSize={"default"}/>
                </IconButton>
              }
              />
          </GridListTile>
        ))}
      </GridList>
    </div>:  <div className="progress">
        <CircularProgress className="circular_progress"/>
      </div>
    }
        </div>
  );
}