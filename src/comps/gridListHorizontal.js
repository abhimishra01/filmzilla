import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {IMAGE_API, DEFAULT_POSTER_Path} from "../api/api";
// import DEFAULT_POSTER_Path from '../api/api';
import "./gridListhz.css";

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
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: "#ffff",
  },
  titleBar: {
    //   background:"black",
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.4) 100%)',
  },
}));

export default function SingleLineGridList({movies}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList spacing={5} cellHeight={280} className={classes.gridList} cols={5.5}>
        {movies && movies.map((tile) => (
          <GridListTile  key={tile.id}>
             <img src={tile.poster_path?IMAGE_API + tile.poster_path : DEFAULT_POSTER_Path} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton  aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className="star" />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}