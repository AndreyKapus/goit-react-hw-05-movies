import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from '../components/services/AppBar';

const Home = lazy(() => import('../components/Pages/Home'));
// const AppBar = lazy(() => import('./services/AppBar'));
const MoviesSearch = lazy(() => import('./Pages/MoviesSearch'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Cast = lazy(() => import('./Pages/Cast'));
const Reviews = lazy(() => import('./Pages/Reviews'));

export const App = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />

            <Route path="movies" element={<MoviesSearch />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="movies/:movieId/cast" element={<Cast />} />
              <Route path="movies/:movieId/reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
