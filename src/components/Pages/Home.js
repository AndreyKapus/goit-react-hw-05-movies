import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchMovies } from 'Servises/fetchMovies';

export function PopularMovies() {
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(movies => setPopMovies(movies));
  }, []);

  return (
    <div>
      <h1>Trending tooday</h1>
      <ul>
        {popMovies &&
          popMovies.map(({ movie, id, title }) => (
            <li key={id}>
              <NavLink
                to={{
                  pathname: `/movies/${id}`,
                }}
                movie={movie}
              >
                {title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}
