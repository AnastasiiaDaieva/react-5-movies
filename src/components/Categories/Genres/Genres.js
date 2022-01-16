import axios from 'axios';
import { useEffect } from 'react';
import { BASE, API_KEY } from 'services/api';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Genres.module.css';
import { activeStyle } from 'components/Header/Header';

function Genres() {
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [seeMore, setSeeMore] = useState(false);
  // console.log(genres);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        setGenres(response.data.genres);
        setSeeMore(true);
        console.log(genres);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <h3>Genres</h3>
      <ul className={s.Genres__list}>
        {seeMore
          ? genres.slice(0, 4).map(({ name, id }) => (
              <li key={id} id={id} className={s.Genres__item}>
                <NavLink
                  to={`/genre/${id}`}
                  className={s.Genres__link}
                  style={activeStyle}
                >
                  {name}
                </NavLink>
              </li>
            ))
          : genres.map(({ name, id }) => (
              <li key={id} id={id} className={s.Genres__item}>
                <NavLink to={`/genre/${id}`} className={s.Genres__link}>
                  {name}
                </NavLink>
              </li>
            ))}

        <p onClick={() => setSeeMore(!seeMore)}>
          {seeMore ? 'See more >>' : 'See less <<'}
        </p>
      </ul>
    </>
  );
}
export default Genres;
