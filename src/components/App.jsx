import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const PopularMovies = lazy(() => import('../components/Pages/Home'));
const AppBar = lazy(() => import('./services/AppBar'));
const MoviesSearch = lazy(() => import('./Pages/MoviesSearch'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <Suspense>
        <header>
          <AppBar />
        </header>
        <Routes>
          <Route index element={<PopularMovies />} />
          <Route path="/" element={<PopularMovies />} />
          <Route path="/movies" element={<MoviesSearch />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="movies/:movieId/cast" element={<Cast />} />
            <Route path="movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
