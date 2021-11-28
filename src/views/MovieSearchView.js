// searchbar
// button

import Searchbar from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/api';
import List from 'components/List/List';
import Loading from 'components/Loader/Loader';

export default function MovieSearchView() {
  const [query, setQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [error, setError] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    setLoading(true);

    setQuery(query);
    fetchMovies(query, pageNumber)
      .then(({ results }) => {
        setFoundMovies(prevMovies => [...prevMovies, ...results]);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
    console.log(foundMovies);
  }, [query, pageNumber]);

  const onQueryChange = query => {
    setQuery(query);
    // setPageNumber(1);
    setFoundMovies([]);
    setError(null);
  };
  return (
    <>
      <Searchbar onSubmit={onQueryChange} />
      {loading && <Loading />}
      <List className="found-movies__list">
        {foundMovies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </List>
      {/* {foundMovies.length === 0 && <div>Nothing was found on {query}</div>} */}
    </>
  );
}
