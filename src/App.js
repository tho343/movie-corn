import {useContext, useEffect} from 'react';
import Navigaiton from './routes/Navigaiton';
import Home from './routes/Home';
import { MovieContext } from './context/MovieContext';
import { Routes,Route } from 'react-router';
import MovieRoute from './routes/movie-route';

function App() {
  const API_KEY = "d367c5b0";
  const {movies,setMovies,searchField,setSearchField} = useContext(MovieContext);
  useEffect(()=>{
     try{
      fetch(`https://www.omdbapi.com/?s=${searchField}&apikey=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
     }catch(err) {
      console.log(err)
     }
    
},[searchField])
  console.log( movies);
  
  return (
    
    <div className="App">
      <Routes>
        <Route path="/movie-corn" element={<Navigaiton/>}>
          <Route index element={<Home/>}/>
          <Route path="/movie-corn/movie-route" element={<MovieRoute/>}/>
        </Route>
      </Routes>     
    </div>
  );
}

export default App;
