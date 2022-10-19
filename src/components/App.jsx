import { fetchMovies } from '../Servises/fetchMovies';
import { Routes, Route } from 'react-router-dom';
import { PopularMovies } from '../components/Pages/Home';
import { AppBar } from './services/AppBar';
import { Movies } from './Pages/Movies';
import { MovieDetails } from './Pages/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <Routes>
        <Route path="/" element={<PopularMovies exact />} />
        <Route path="/movies" element={<Movies exact />} />
        <Route path="movies/:movieId" element={<MovieDetails exact />}>
          <Route path="movies/:movieId/cast" element={<Cast />} />
          <Route path="movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
