import { useEffect } from "react";
import { useState } from "react";
import {createContext} from "react";

export const MovieContext = createContext({
    API_KEY: "d367c5b0",
    movies: [],
    setMovies: () =>{},
    searchField: "",
    setSearchField: () =>{},
    selectedId: null,
    setSelectedId: ()=>{},
    
});

    
export const MoviesProvider = ({children}) => {  
    
    const [movies,setMovies] = useState([]);
    const [searchField, setSearchField] = useState("");
    const [selectedId, setSelectedId] = useState();
    
    
    const value = { searchField,setSearchField,movies, setMovies,selectedId, setSelectedId}
    return (<MovieContext.Provider value={value}> {children} </MovieContext.Provider>)
}
