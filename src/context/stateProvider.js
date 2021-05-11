import {createContext, useReducer,useContext} from "react";

// Prep : context data layer for state centralization
export const StateContext = createContext();


// State Provider
export const StateProvider = ({reducer,initialState,children}) =>{
    return <StateContext.Provider
    value={useReducer(reducer,initialState)}> 
    {children}
    </StateContext.Provider>
}


export const useStateValue = () => useContext(StateContext);