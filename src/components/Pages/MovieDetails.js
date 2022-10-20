import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'Servises/fetchMovies';
import { GoBackButton } from 'components/GoBackBtn';
import { Loader } from 'components/Loader';

export const MovieDetails = () => {
  const [aboutMovie, setAboutMovie] = useState(null);
  const { movieId } = useParams();
  const [status, setStatus] = useState(false);

  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/';

  // const movie = fetchMovieById(movieId);

  useEffect(() => {
    setStatus(true);
    fetchMovieById(movieId).then(movie => {
      setAboutMovie(movie);
    });
    setStatus(false);
  }, [movieId]);

  if (!aboutMovie) {
    return null;
  }

  return (
    <div>
      <GoBackButton backLinkRef={backLinkRef} />
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
      {status && <Loader />}
    </div>
  );
};
