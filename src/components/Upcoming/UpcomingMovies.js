import axios from 'axios';
import { useEffect } from 'react';
import { BASE, API_KEY } from 'services/api';
import { useState } from 'react';
import s from './UpcomingMovies.module.scss';
import { Link } from 'react-router-dom';

function UpcomingMovies() {
  const [loading, setLoading] = useState(false);

  const [upcomingMovies, setUpcomingMovies] = useState([]);

  // console.log(UpcomingMovies);

  const getDate = givenDate => {
    const d1 = new Date();
    const d2 = new Date(givenDate);
    const result = d1.getTime() < d2.getTime();
    return result;
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${BASE}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1region=ISO%203166-2`,
      )
      .then(response => {
        setUpcomingMovies(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => console.log(error.message))
      .finally(() => setLoading(false));
  }, []);

  const formatDate = input => {
    const datePart = input.match(/\d+/g),
      year = datePart[0].substring(2),
      month = datePart[1],
      day = datePart[2];

    return day + '/' + month + '/' + year;
  };

  return (
    <div className={s.UpcomingMovies}>
      <h3 className={s.UpcomingMovies__heading}>Upcoming Movies</h3>
      <ul className={s.UpcomingMovies__list}>
        {upcomingMovies.map(
          ({ title, poster_path, id, release_date }) =>
            getDate(release_date) && (
              <article key={id} className={s.UpcomingMovies__thumb}>
                <li>
                  <Link
                    to={`/movies/${id}`}
                    //   state={{ from: location }}
                    className={s.UpcomingMovies__title}
                  >
                    <img
                      className={s.UpcomingMovies__photo}
                      src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
                      alt={title}
                    />
                    <p className={s.UpcomingMovies__name}>{title}</p>
                  </Link>
                  <p className={s.UpcomingMovies__date}>
                    {formatDate(release_date)}
                  </p>
                </li>
              </article>
            ),
        )}
      </ul>
    </div>
  );
}
export default UpcomingMovies;
