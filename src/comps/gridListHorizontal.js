import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import { IMAGE_API, DEFAULT_POSTER_Path } from "../api/api";
import "./gridListhz.css";
import TrendingToggleButton from "./toggleBtn";
import BookmarkBorderTwoToneIcon from "@material-ui/icons/BookmarkBorderTwoTone";
import { StateContext } from "../context/stateProvider";
import fireStore, { timestamp } from "../keys/firebaseConfig";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    // width: "100vw",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    color: "#ffff",
    fontSize: "0.87rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.77rem",
    },
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    letterSpacing: "1px",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.4) 100%)",
  },
  rating: {
    fontSize: "0.88rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.76rem",
    },
    color: "#fff",
    margin: "4px",
  },
}));

export default function SingleLineGridList(props) {
  const classes = useStyles();

  const [user, setUser] = useContext(StateContext).user;
  console.log(setUser);
  // console.clear();

  const databaseRef = fireStore.collection(user.email);

  const addBookmark = ({ title, overview, poster_path, vote_average }) => {
    if (props.tvShows) {
      databaseRef.doc("bookmarks").collection("tv_shows").add({
        title: title,
        overview: overview,
        poster_path: poster_path,
        vote_average: vote_average,
        timestamp: timestamp,
      });
    } else {
      databaseRef.doc("bookmarks").collection("movies").add({
        title: title,
        overview: overview,
        poster_path: poster_path,
        vote_average: vote_average,
        timestamp: timestamp,
      });
    }
    alert("Added to bookmarks!");
  };

  // For responsieness of gridList
  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 6;
    }

    if (isWidthUp("lg", props.width)) {
      return 3.5;
    }

    if (isWidthUp("md", props.width)) {
      return 4;
    }

    return 2;
  };
  return (
    <div className="trending_gridContainer">
      <div className="trending_gridContainerHead">
        <h2>
          {props.tvShows ? "TV Shows" : "Movies"} Trending :{" "}
          <TrendingToggleButton tvShow={props.tvShows ? props.tvShows : null} />
        </h2>
        <Link to={`/bookmarks/${props.tvShows ? "tv_shows" : "movies"}`}>
          <IconButton>
            <BookmarkBorderTwoToneIcon
              className="bookmark__iconBtn"
              fontSize={"large"}
            />
          </IconButton>
        </Link>
      </div>
      {props.contentArray.length > 0 ? (
        <div className={classes.root}>
          <GridList
            spacing={3}
            cellHeight={300}
            className={classes.gridList}
            // cols={getGridListCols()}
            // cols="auto"
          >
            {props.contentArray.map((tile) => {
              return (
                <GridListTile key={tile.id}>
                  <img
                    src={
                      tile.poster_path
                        ? IMAGE_API + tile.poster_path
                        : DEFAULT_POSTER_Path
                    }
                    alt={tile.title}
                  />
                  {/* <Link to={`/${tile.id}/${props.tvShows?"tv_Shows":"movies"}`}>
              </Link> */}
                  <GridListTileBar
                    title={props.tvShows ? tile.name : tile.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    subtitle={tile.vote_average}
                    actionIcon={
                      <IconButton
                        onClick={() =>
                          addBookmark({
                            title: props.tvShows ? tile.name : tile.title,
                            overview: tile.overview,
                            vote_average: tile.vote_average,
                            poster_path: tile.poster_path,
                          })
                        }
                        aria-label={`star ${tile.title}`}
                      >
                        <BookmarkBorderTwoToneIcon
                          className={"star"}
                          fontSize={"default"}
                        />
                      </IconButton>
                    }
                  />
                </GridListTile>
              );
            })}
          </GridList>
        </div>
      ) : (
        <div className="progress">
          <CircularProgress className="circular_progress" />
        </div>
      )}
    </div>
  );
}
