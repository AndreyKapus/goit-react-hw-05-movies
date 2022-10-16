import axios from 'axios';

const API = '7f79b9469f05b818a5fcd6a2e700e54b';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies() {
  const response = await axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API}`)
    .then(result => result.data.results);
  return response;
}
console.log(fetchMovies());
