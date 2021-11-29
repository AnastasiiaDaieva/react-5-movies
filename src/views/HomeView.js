// trending today
import Container from 'components/Container/Container';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_KEY } from 'services/api';
import List from 'components/List/List';
import { Link, useMatch } from 'react-router-dom';

import s from 'views/HomeView.module.css';

export default function HomeView() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}
`,
      )
      .then(response => {
        const array = response.data.results;
        setTrendingMovies(array);
        console.log(response.data);
      });
  }, []);
  return (
    <Container>
      <h1>Trending Today</h1>
      <List>
        {trendingMovies.map(
          ({
            title,
            id,
            poster_path,
            release_date,
            overview,
            backdrop_path,
          }) => (
            <li key={id} className={s.Home__item}>
              <img
                alt={title}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                className={s.Home__image}
              />
              <div className={s.Home__description}>
                <Link to={`/movie/${id}`}>
                  <h2>{title}</h2>
                </Link>
                <p> {new Date(release_date).toDateString()}</p>
                <p className={s.Home__overview}>{overview}</p>
              </div>
            </li>
          ),
        )}
      </List>
    </Container>
  );
}
