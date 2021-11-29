// searchbar
// button

import axios from 'axios';

import Searchbar from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/api';
import List from 'components/List/List';
import Loading from 'components/Loader/Loader';
import Button from 'components/Button/Button';

const API_KEY = '6fc149a4cf08bb260c2094f65b6f8095';
const BASE = 'https://api.themoviedb.org/3';

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
    <>
      <Searchbar onSubmit={onQueryChange} />
      {loading && <Loading />}
      {foundMovies.length > 0 && (
        <>
          <h2>Results</h2>
          <List className="found-movies__list">
            {foundMovies?.map(({ id, title }) => {
              return <li key={id}>{title}</li>;
            })}
          </List>
        </>
      )}
      {total > 20 && <Button text="Load More" onClick={loadMore} />}
      {foundMovies.length === 0 && <div>Nothing was found on {query}</div>}
    </>
  );
}
