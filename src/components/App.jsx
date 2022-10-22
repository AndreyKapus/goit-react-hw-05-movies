import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../components/Pages/Home'));
const AppBar = lazy(() => import('./services/AppBar'));
const MoviesSearch = lazy(() => import('./Pages/MoviesSearch'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('./Pages/PageNotFound'));

export const App = () => {
  return (
    <div>
      <Suspense>
        <AppBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/goit-react-hw-05-movies/" element={<Home />} />
          <Route path="/movies" element={<MoviesSearch />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="movies/:movieId/cast" element={<Cast />} />
            <Route path="movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
