import Button from 'components/Button/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please type the query', {
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputSearch"></label>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleQueryChange}
          id="inputSearch"
        />
        <Button text="Search" type="submit" />
      </form>
    </>
  );
}
