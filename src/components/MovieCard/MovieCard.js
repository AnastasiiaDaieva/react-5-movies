// user score
// overview
// genres

import Container from 'components/Container/Container';
import List from 'components/List/List';
import s from 'components/MovieCard/MovieCard.module.css';

export default function MovieCard({
  title,
  score,
  poster,
  overview,
  genres,
  id,
  date,
}) {
  console.log(genres);

  return (
    <article className={s.MovieCard}>
      <div className={s.Card__poster}>
        <img alt={title} src={`https://image.tmdb.org/t/p/w300/${poster}`} />
      </div>
      <div className={s.Card__subcontainer}>
        <h2>{`${title}, ${date.slice(0, 4)}`}</h2>
        <List style={{ padding: '0px' }}>
          {genres.map(({ id, name }) => (
            <li key={id} className={s.Card__genres}>
              {name}
            </li>
          ))}
        </List>
        <p>Rating {score > 0 && score}</p>
        <p>{overview}</p>
      </div>
    </article>
  );
}
