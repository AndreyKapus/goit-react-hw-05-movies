import { useState, useEffect } from 'react';
import { fetchMovies } from 'Servises/fetchMovies';

export const PopularMovis = () => {
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(movies => setPopMovies(movies));
  }, []);

  const trendingMovies = popMovies.map(({ movie, id }) => (
    <li key={id}>
      <link to={`${movie}`}>{movie.name}</link>
    </li>
  ));

  return (
    <div>
      <h1>Trending tooday</h1>
      <ul>
        <li>{trendingMovies}</li>
      </ul>
    </div>
  );
};
