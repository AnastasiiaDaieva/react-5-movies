import axios from 'axios';

const API_KEY = '6fc149a4cf08bb260c2094f65b6f8095';
const BASE = 'https://api.themoviedb.org/3';

export async function fetchMovies(value, page) {
  return await fetch(
    // `${BASE}/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=${page}&include_adult=false`,
    `${BASE}/search/movie?api_key=${API_KEY}&query=${value}`,
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => data);
}
