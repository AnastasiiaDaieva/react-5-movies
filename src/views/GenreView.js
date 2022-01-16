import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_KEY, BASE } from 'services/api';
import { useRef } from 'react';

function GenreView() {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const genreId = location.pathname.slice(7);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE}/movie/popular?api_key=${API_KEY}&language=en-US&`)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {movies.map(({ title }) => (
        <li>{title}</li>
      ))}
    </>
  );
}

export default GenreView;
