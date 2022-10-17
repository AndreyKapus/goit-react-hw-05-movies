import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { fetchMovies, fetchMovieById } from 'Servises/fetchMovies';

export const MovieDetails = () => {
  const { aboutMovie, setAboutMovie } = useState(null);
  const { movieId } = useParams();
  const movie = fetchMovieById(movieId);

  useEffect(() => {
    fetchMovieById(movieId).then(data => {
      setAboutMovie(data);
    });
  }, [aboutMovie]);

  return (
    <main>
      <img src="{https://image.tmdb.org/t/p/w300/movie.poster_path}" alt="" />
      <h2>{movie.title}</h2>
      <p>{movie.popularity}</p>
      <p>{movie.overview}</p>
    </main>
  );
};
