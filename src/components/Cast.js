import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieCast } from '../Servises/fetchMovies';
import { MovieDetails } from './Pages/MovieDetails';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId)
      .then(({ cast }) =>
        cast.map(actor => ({
          name: actor.name,
          character: actor.character,
          img: actor.profile_path,
        }))
      )
      .then(castData => setMovieCast(castData));
  }, [movieId]);
  console.log(movieCast);

  if (!movieCast) {
    return null;
  }

  return (
    <div>
      {movieCast && (
        <div>
          {movieCast.map(({ name, character, img, id }) => (
            <div key={id + name}>
              <p>{name}</p>
              <p>{character}</p>
              {img ? (
                <img src={`https://image.tmdb.org/t/p/w154${img}`} alt="" />
              ) : (
                'no image'
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
