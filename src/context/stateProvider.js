import {createContext, useState} from "react";

export const StateContext = createContext();

// Function to fetch movies from an api
export const fetchData = async(api,setter) =>{
    await fetch(api).then(res=>{
        if(!res.ok){
            alert("Something Went Wrong !");
        }
        return res.json();
    }).then(data=>{
        setter([data.results]);
        // console.log(data.results);
    }).catch(err=>alert(err.message));
}


export const StateContextProvider = (props) =>{
    
    // For Auth
    const [user, setUser] = useState(null);
    
    // For Home Page Display
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    
    // For Searching purposes :
    const [searching_tvShows, setSearchingTVShows] = useState(false);
    const [searching_movies, setSearchingMovies] = useState(false);
    const [searching, setSearching] = useState(null);

    // Search Result :
    const [searching_movies_result, setSearchingMoviesResult] = useState([]);
    const [searching_tvShows_result, setSearchingTvShowsResult] = useState([]);


    // Bookmarks Array State 
    const [bookmarks,setBookmarks] = useState([]);

    return (
        // We can use the value of user, wherever we want in the components which are inside of the StateContext.Provider
        <StateContext.Provider 
        value={{
            user:[user,setUser],
            movies_popular:[movies,setMovies],
            tvShows_popular:[tvShows,setTvShows],
            searching_tvShows:[searching_tvShows, setSearchingTVShows],
            searching_movies:[searching_movies, setSearchingMovies],
            searching_movies_result:[searching_movies_result, setSearchingMoviesResult],
            searching_tvShows_result:[searching_tvShows_result, setSearchingTvShowsResult],
            searching: [searching, setSearching],
            bookmarks:[bookmarks,setBookmarks],
            }}>
            {props.children}
        </StateContext.Provider>
    )
}