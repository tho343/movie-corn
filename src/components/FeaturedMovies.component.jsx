import React from 'react'
import "./FeaturedMovies.styles.css"
import MovieCard from './MovieCard.Component'
import { MovieContext } from '../context/MovieContext'
import { useContext } from 'react'
export default function FeaturedMovies() {
  const {movies} = useContext(MovieContext);
  
  return (
    <div className='featured-movies-section'>
        {movies?.map(item =>{
          return (
            <MovieCard key={item.imdbID} id={item.imdbID} title={item.Title} year={item.Year} imgUrl={item.Poster}/>
          )
        })}
            
    </div>
  )
}
