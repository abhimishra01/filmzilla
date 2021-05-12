import {createContext, useState} from "react";

export const StateContext = createContext();

export const StateContextProvider = (props) =>{
    const [user, setUser] = useState(null);
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    return (
        // We can use the value of user, wherever we want in the components which are inside of the StateContext.Provider
        <StateContext.Provider 
        value={{user:[user,setUser],movies_popular:[movies,setMovies],tvShows_popular:[tvShows,setTvShows]}}>
            {props.children}
        </StateContext.Provider>
    )
}