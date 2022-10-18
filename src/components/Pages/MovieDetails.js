import axios from 'axios';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieById } from 'Servises/fetchMovies';

export const MovieDetails = () => {
  const [aboutMovie, setAboutMovie] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);
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
      {' '}
      movieId {movieId}
      <img src="{https://image.tmdb.org/t/p/w300/movie.poster_path}" alt="" />
      <h2>{aboutMovie.title}</h2>
      <h3>Overview</h3>
      <p>{aboutMovie.overview}</p>
      <p>{aboutMovie}</p>
      <NavLink to={`movies/${movieId}/reviews`}>Reviews</NavLink>
      <NavLink to={`movies/${movieId}/cast`}>Cast</NavLink>
      <Outlet />
    </div>
  );
};
