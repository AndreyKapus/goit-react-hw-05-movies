import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PopularMovies } from '../components/Pages/Home';
import { AppBar } from './services/AppBar';
import { MoviesSearch } from './Pages/MoviesSearch';
import { MovieDetails } from './Pages/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

// const PopularMovies = lazy(() => import('../components/Pages/Home'));
// const AppBar = lazy(() => import('./services/AppBar'));
// const MoviesSearch = lazy(() => import('./Pages/MoviesSearch'));
// const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
// const Cast = lazy(() => import('./Cast'));
// const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <Routes>
        <Route path="/" element={<PopularMovies />} />
        <Route path="/movies" element={<MoviesSearch />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
