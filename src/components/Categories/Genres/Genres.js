import axios from 'axios';
import { useEffect } from 'react';
import { BASE, API_KEY } from 'services/api';
import { useState } from 'react';
import s from './Genres.module.scss';
import GenreItem from './GenreItem/GenreItem';
import Loading from 'components/Loader/Loader';

function Genres() {
  const [genres, setGenres] = useState([]);
  const [seeMore, setSeeMore] = useState(false);
  const [loading, setLoading] = useState(false);

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
      .catch(error => console.log(error.message))
      .finally(() => setLoading(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h3>Genres</h3>
          <ul className={s.Genres__list}>
            {seeMore
              ? genres
                  .slice(0, 4)
                  .map(({ name, id }) => (
                    <GenreItem key={id} id={id} name={name} />
                  ))
              : genres.map(({ name, id }) => (
                  <GenreItem key={id} id={id} name={name} />
                ))}

            <p onClick={() => setSeeMore(!seeMore)}>
              {seeMore ? 'See more >>' : 'See less <<'}
            </p>
          </ul>
        </>
      )}
    </>
  );
}
export default Genres;
