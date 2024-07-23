import React, { useState } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: '40843f4e0d53c2e05deae1a67d54a9ba',
          query: query
        }
      });
      setMovies(response.data.results);
      setError(''); // Clear error if successful
    } catch (error) {
      setError('Error fetching data. Please try again.');
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      <ul>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))
        ) : (
          <li>No movies found</li>
        )}
      </ul>
    </div>
  );
};

export default MovieSearch;

