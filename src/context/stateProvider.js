import {createContext, useState} from "react";

export const StateContext = createContext();

export const StateContextProvider = (props) =>{
    const [user, setUser] = useState(null);
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [searching_tvShows, setSearchingTVShows] = useState(false);
    const [searching_movies, setSearchingMovies] = useState(false);
    return (
        // We can use the value of user, wherever we want in the components which are inside of the StateContext.Provider
        <StateContext.Provider 
        value={{
            user:[user,setUser],
            movies_popular:[movies,setMovies],
            tvShows_popular:[tvShows,setTvShows],
            searching_tvShows:[searching_tvShows, setSearchingTVShows],
            searching_movies:[searching_movies, setSearchingMovies],
        }}>
            {props.children}
        </StateContext.Provider>
    )
}