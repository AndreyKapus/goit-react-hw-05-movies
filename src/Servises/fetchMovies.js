import axios from 'axios';

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
    .then(result => result.data);
  return response;
}

//  Жанры ------------------

export async function fetchMovieCast(movieId) {
  const response = await axios
    .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API}&language=en-US`)
    .then(result => result.data);
  return response;
}

// Ревью --------------------

export async function fetchMovieReview(movieId) {
  const response = await axios
    .get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API}&language=en-US`)
    .then(result => result.data);
  return response;
}

//  Поиск ------------------

export async function fetchMovieByQuery(query) {
  const response = await axios
    .get(
      `${BASE_URL}/search/movie?api_key=${API}&query=${query}&language=en-US`
    )
    .then(result => result.data);
  return response;
}
