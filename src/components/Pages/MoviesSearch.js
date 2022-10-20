import { useState, useEffect } from 'react';
import { fetchMovieByQuery } from 'Servises/fetchMovies';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from '../MoviesSearch';
import { Loader } from 'components/Loader';

export const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovie] = useState(null);
  const [totalRezultMovie, setTotalRezMovie] = useState(null);
  const [status, setStatus] = useState(false);
  const [inputSearch, setInputSearch] = useState(query);

  useEffect(() => {
    if (query === '') return;

    setMovie(null);
    setTotalRezMovie(null);
    setStatus(true);

    fetchMovieByQuery(query)
      .then(data => {
        setMovie(data.results);
        setTotalRezMovie(data.total_results);
        setStatus(false);
      })
      .catch(console.log);
  }, [query]);

  const handleInputChange = e => {
    setInputSearch(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const queryNormalized = form.query.value.toLowerCase().trim();

    setSearchParams({ query: queryNormalized });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={inputSearch}
          onChange={handleInputChange}
          placeholder="Enter movie name"
        />

        <button type="submit">Search</button>
      </form>

      {movies && <MoviesList movies={movies} />}
      {status && <Loader />}
      {totalRezultMovie === 0 && <div>Not found movies</div>}
    </>
  );
};
