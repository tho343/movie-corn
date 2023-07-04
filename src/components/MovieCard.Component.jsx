import React, { useContext, useEffect, useState } from 'react'
import "./MovieCard.styles.css"
import Poster from "../assets/movie-poster-sample.png"
import ErrorImage from "../assets/image_not_found.png"
import { Navigate, useNavigate } from 'react-router';
import { MovieContext } from '../context/MovieContext';
import MovieRoute from '../routes/movie-route';



export default function MovieCard(props) {
    
    const {id,year, title,imgUrl} = props;
    const navigate = useNavigate();
    const onClickHandler = (id) =>{
        if(id){
            navigate("./movie-route", {replace:false, state: {key : id}})
        }
        
    }
    
      return (
        
    <div className='movie-card-container'>
        <div className="movie-poster-container" onClick={() => onClickHandler(id)}>
            {imgUrl !== "N/A"? <img src={`${imgUrl}`} className='movie-card-poster'></img> : <img className='movie-card-poster' src={ErrorImage}></img>} 
        </div>
        <div className="movie-info">
            <div className="movie-title">
                <h3>
                   {`${title}`}
                </h3>
            </div>
            <div className="movie-year">
                <p>
                {`${year}`}
                </p>
            </div>
            <button className='secondary-btn'>Add to your favorite</button>
        </div>
        
    </div>
  )
}
