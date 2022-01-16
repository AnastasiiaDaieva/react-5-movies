import s from './MovieArticle.module.scss';
import { Link } from 'react-router-dom';

function MovieArticle({ id, title, poster_path, release_date }) {
  return (
    <article className={s.MovieArticle__thumb}>
      <li>
        <Link
          to={`/movies/${id}`}
          //   state={{ from: location }}
          className={s.MovieArticle__title}
        >
          <img
            className={s.MovieArticle__photo}
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={title}
          />
          <p className={s.MovieArticle__name}>{`${title} (${release_date.slice(
            0,
            4,
          )})`}</p>
        </Link>
      </li>
    </article>
  );
}
export default MovieArticle;
