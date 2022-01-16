import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { API_KEY, BASE } from 'services/api';
import s from './GenreView.module.scss';
import GenresBar from 'components/Categories/Genres/GenresBar/GenresBar';
import MovieArticle from 'components/MovieArticle/MovieArticle';
import Loading from 'components/Loader/Loader';

function GenreView() {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const genreId = location.pathname.slice(7);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${BASE}/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=${genreId}`,
      )
      .then(response => {
        setMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [genreId]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        setGenres(response.data.genres);
        console.log(genres);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={s.GenreView}>
          <GenresBar />
          <ul className={s.GenreView__list}>
            {movies.map(({ title, id, poster_path, release_date }) => (
              <MovieArticle
                title={title}
                key={id}
                id={id}
                poster_path={poster_path}
                release_date={release_date}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default GenreView;
