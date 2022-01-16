import axios from 'axios';
import { API_KEY, BASE } from 'services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import List from 'components/List/List';
import Loading from 'components/Loader/Loader';

import s from 'views/HomeView.module.scss';

export default function HomeView() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `${BASE}/trending/movie/day?api_key=${API_KEY}
`,
      )
      .then(response => {
        const array = response.data.results;
        setTrendingMovies(array);
        // console.log(response.data);
      })
      .catch(error => console.log(error.message))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <List heading="Trending Today" classProp={s.Home__heading}>
          {trendingMovies.map(
            ({ title, id, poster_path, release_date, overview }) => (
              <li key={id} className={s.Home__item}>
                <img
                  alt={title}
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  className={s.Home__image}
                />
                <div className={s.Home__description}>
                  <Link to={`/movies/${id}`} className={s.Home__title}>
                    <h2>
                      {title} ({release_date.slice(0, 4)})
                    </h2>
                  </Link>
                  <p className={s.Home__overview}>{overview}</p>
                </div>
              </li>
            ),
          )}
        </List>
      )}
    </div>
  );
}
