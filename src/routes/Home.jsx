import React from 'react'
import Hero from '../components/Hero.component'
import MovieCard from '../components/MovieCard.Component'
import FeaturedMovies from '../components/FeaturedMovies.component'
export default function Home() {
  return (
    <div className='home-section'>
        <Hero/>
        <FeaturedMovies/>
    </div>
  )
}
