// searchbar
// button

import axios from 'axios';

import Searchbar from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from 'components/List/List';
import Loading from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import { API_KEY, BASE } from 'services/api';
import s from 'views/MovieSearchView.module.css';

export default function MovieSearchView() {
  const [query, setQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);

    setQuery(query);
    axios
      .get(
        `${BASE}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`,
      )
      .then(response => {
        const array = response.data.results;
        const total = response.data.total_results;
        setFoundMovies(prevList => [...prevList, ...array]);
        setTotal(total);
        // console.log(response);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
    // console.log(foundMovies);
  }, [query, pageNumber]);

  useEffect(() => {
    window.localStorage.setItem('found', JSON.stringify(foundMovies));
  }, [foundMovies]);

  const onQueryChange = query => {
    setQuery(query);
    setPageNumber(1);
    setFoundMovies([]);
    setError(null);
  };

  const loadMore = () => {
    setPageNumber(prevPage => prevPage + 1);
  };
  return (
    <Container>
      <Searchbar onSubmit={onQueryChange} />
      {loading && <Loading />}

      {foundMovies.length > 0 && (
        <>
          <h2>Results on {`"${query}"`}</h2>
          <List>
            {foundMovies.map(
              ({ title, id, poster_path, release_date, overview }) => (
                <li key={id} className={s.Search__item}>
                  <img
                    alt={title}
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    className={s.Search__image}
                  />
                  <div className={s.Search__description}>
                    <Link to={`/movies/${id}`} className={s.Search__title}>
                      <h2>{title}</h2>
                    </Link>
                    <p> {new Date(release_date).toDateString()}</p>
                    <p className={s.Search__overview}>{overview}</p>
                  </div>
                </li>
              ),
            )}
          </List>
        </>
      )}
      {total > 20 && <Button text="Load More" onClick={loadMore} />}
      {foundMovies.length === 0 && query && (
        <div>Nothing was found on {query}</div>
      )}
    </Container>
  );
}
