import axios from 'axios';
import { useEffect } from 'react';
import { BASE, API_KEY } from 'services/api';
import { useState } from 'react';
import s from './GenresBar.module.scss';
import GenreItem from '../GenreItem/GenreItem';

function GenresBar() {
  const [genres, setGenres] = useState([]);
  // console.log(genres);

  useEffect(() => {
    axios
      .get(`${BASE}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        setGenres(response.data.genres);
      })
      .catch(error => console.log(error.message));
  }, []);
  return (
    <>
      <ul className={s.GenresBar__list}>
        {genres.map(({ name, id }) => (
          <GenreItem
            key={id}
            id={id}
            name={name}
            addClass={s.GenresBar__item}
          />
        ))}
      </ul>
    </>
  );
}
export default GenresBar;
