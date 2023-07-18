import React from 'react'
import { MovieContext } from '../context/MovieContext'
import { useContext } from 'react'
export default function FavoriteMovies() {
    const {favoriteMovies} = useContext(MovieContext);
  return (
    <div>FavoriteMovies

    </div>
  )
}
