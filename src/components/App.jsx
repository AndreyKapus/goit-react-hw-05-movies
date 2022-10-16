import { fetchMovies } from '../Servises/fetchMovies';
import { Routes, Route } from 'react-router-dom';
import { PopularMovis } from '../components/Pages/Home';
const axios = require('axios').default;

export const App = () => {
  return (
    <div>
      <PopularMovis />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
};
