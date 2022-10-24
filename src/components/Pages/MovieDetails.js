import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'Servises/fetchMovies';
import { GoBackButton } from 'components/GoBackBtn';
import { Loader } from 'components/Loader';
import {
  Container,
  Img,
  MovieDetailsContainer,
  StyledLink,
  Genre,
  LinkList,
} from '../../Styles/MovieDetails';

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
    <Container>
      <GoBackButton backLinkRef={backLinkRef} />
      <Img>
        <img
          src={`https://image.tmdb.org/t/p/w300${aboutMovie.poster_path}`}
          alt=""
        />
      </Img>
      <MovieDetailsContainer>
        <h2>
          {aboutMovie.title} {aboutMovie.release_date.slice(0, 4)}
        </h2>
        <p>Vote average: {aboutMovie.vote_average}</p>
        <h3>Overview</h3>
        <p>{aboutMovie.overview}</p>
        <Genre>
          Genre: {aboutMovie.genres.map(({ name }) => name).join(' ')}
        </Genre>
        <LinkList>
          <StyledLink
            to={`movies/${movieId}/reviews`}
            state={{ from: backLinkRef }}
          >
            Reviews
          </StyledLink>
          <StyledLink
            to={`movies/${movieId}/cast`}
            state={{ from: backLinkRef }}
          >
            Cast
          </StyledLink>
        </LinkList>
        <Outlet />
        {status && <Loader />}
      </MovieDetailsContainer>
    </Container>
  );
};

export default MovieDetails;
