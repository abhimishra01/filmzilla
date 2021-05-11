export const initState = {
    user:null,
    trending_api_movies = [],
    trending_api_tvshows = [],
}


export const action = [
    SET_USER = "SET_USER",
    SET_Trending_api_movies = "SET_Trending_api_movies",
    SET_SET_Trending_api_tvshows = "SET_SET_Trending_api_tvshows",
]


const reducer = (state,action) => {
    switch(action.type){
        case "SET_USER": 
        return {
            ...state,
            user: action.user
        }
        case "SET_Trending_api_movies":
            return {
                ...state,
                trending_api_movies: action.trending_api_movies
            }
        
        case "SET_Trending_api_tvshows":
            return {
                ...state,
                trending_api_tvshows: action.trending_api_tvshows
            }
        default: return state;
    }
}


export default reducer;