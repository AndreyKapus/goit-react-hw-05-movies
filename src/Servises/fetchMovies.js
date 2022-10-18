import axios from 'axios';
import { MovieDetails } from 'components/Pages/MovieDetails';

const API = '7f79b9469f05b818a5fcd6a2e700e54b';
const BASE_URL = 'https://api.themoviedb.org/3';

//  Популярные фильмы------------

export async function fetchMovies() {
  const response = await axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API}`)
    .then(result => result.data.results);
  return response;
}

//   Один фильм ------------

export async function fetchMovieById(movieId) {
  const response = await axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API}&language=en-US`)
    .then(result => result.data.results);
  return response;
}
