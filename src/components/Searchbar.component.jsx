import "./Searchbar.styles.css"
import React from 'react'
import Search from "../assets/search.png"
import { useState } from "react"
import { useRef } from "react";
import { MovieContext } from "../context/MovieContext";
import { useContext } from "react";

export default function Searchbar() {
  
  const searchText = useRef();
  const {searchField, setSearchField} = useContext(MovieContext);
  const handleSubmit = (event) =>{
    event.preventDefault();
    setSearchField(searchText?.current.value);
  }
 
  
  return (
    <div>
        <form className="search-form" onSubmit={handleSubmit}>
            <input  type="text" id="search-field" ref={searchText} placeholder="Search your movie"></input>
            <button type="submit" className="submit-btn">
                <img src={Search}></img>
            </button>
        </form>
    </div>
  )
}
