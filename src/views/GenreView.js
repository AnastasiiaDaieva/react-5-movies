import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_KEY, BASE } from 'services/api';

function GenreView() {
  const location = useLocation();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(location);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => {
        console.log(response.data.results);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
    // console.log(foundMovies);
  }, []);
  return (
    <>
      {location.pathname.slice(7)}
      {}
    </>
  );
}

export default GenreView;
