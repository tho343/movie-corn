import React, { Fragment, useContext, useEffect, useState } from 'react'
import "./movie-route.styles.css"
import { useLocation, useNavigate } from 'react-router'
import Poster from "../assets/movie-poster-sample.png"
import { MovieContext } from '../context/MovieContext'

export default function MovieRoute
() {
    const API_KEY = "d367c5b0";
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.key;
    const [movie,setMovie] = useState();
    const goBack = () =>{
        navigate(-1);
    }
    useEffect(()=>{
        try{
            fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
        .then(res => res.json())
        .then(data => setMovie(data))
        }    
        catch(err){
            console.log(err)
        }
        
    },[])
  return (
    
    <div className="movie-route">
        <div>
        <button className='secondary-btn' onClick={goBack}>go back</button>
        {movie && (
            
            <div className='movie-route-content'>
                <div className="movie-route-poster-container">
                    <img src={movie.Poster}></img>
                </div>
                <div className='movie-route-info'>
                    <h1>{movie?.Title}</h1>
                    <p> 
                        <span><strong>Length: </strong>{movie.Runtime}</span>
                        <br></br>
                        <span><strong>Release: </strong> {movie.Released}</span>
                        <br></br>
                        <span><strong>Genre: </strong> {movie.Genre}</span>
                        <br></br>
                        <span><strong>Actors: </strong> {movie.Actors}</span>
                        <br></br>
                        <span><strong>Plot: </strong> {movie.Plot}</span>
                        <br></br>
                        <span><strong>ImdbRating: </strong> {movie.imdbRating}</span>
                        <br></br>
                    </p>
                    <button className='secondary-btn'>Add to your favorite</button>
                </div>
            </div>
        )}
       </div> 
    </div>
  )
    
    
}
