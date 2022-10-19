import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'Servises/fetchMovies';

export const MovieDetails = () => {
  const [aboutMovie, setAboutMovie] = useState(null);
  const { movieId } = useParams();

  // const movie = fetchMovieById(movieId);

  useEffect(() => {
    fetchMovieById(movieId).then(movie => {
      setAboutMovie(movie);
    });
  }, [movieId]);

  console.log(aboutMovie);

  if (!aboutMovie) {
    return null;
  }

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300${aboutMovie.poster_path}`}
        alt=""
      />
      <h2>
        {aboutMovie.title} {aboutMovie.release_date.slice(0, 4)}
      </h2>
      <p>Vote average: {aboutMovie.vote_average}</p>
      <h3>Overview</h3>
      <p>{aboutMovie.overview}</p>
      <p>Genre: {aboutMovie.genres.map(({ name }) => name).join(' ')}</p>
      <NavLink to={`movies/${movieId}/reviews`}>Reviews</NavLink>
      <NavLink to={`movies/${movieId}/cast`}>Cast</NavLink>
      <Outlet />
    </div>
  );
};
