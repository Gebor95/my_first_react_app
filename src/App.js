
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard.jsx';
import './App.css';
import SearchIcon from './search.svg';

// bfa55a15
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=bfa55a15';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies(`Spiderman`);
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input onChange={(e) => { setSearchTerm(e.target.value)}} value={searchTerm} placeholder='Search for movies' />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
      </div>
      {
        movies?.length > 0
          ?
          (<div className="container">
            {movies.map((movie) => (<MovieCard movie={movie} />))}
          </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }

    </div>
  );
}

export default App;
