import s from 'components/MovieCard/MovieCard.module.css';

import PropTypes from 'prop-types';

export default function MovieCard({
  title,
  score,
  poster,
  overview,
  genres,
  date,
}) {
  // console.log(genres);
  // console.log(date);

  return (
    <article className={s.MovieCard}>
      <div className={s.Card__poster}>
        <img
          className={s.Card__image}
          alt={title}
          src={`https://image.tmdb.org/t/p/w300/${poster}`}
        />
      </div>
      <div className={s.Card__subcontainer}>
        <h2>{`${title} (${date})`}</h2>

        <p className={s.Card__genres}>
          {genres.map(({ name }) => name).join(', ')}
        </p>
        <p>Rating {score > 0 && score}</p>
        <p>{overview}</p>
      </div>
    </article>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  score: PropTypes.number,
  poster: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.array,
  date: PropTypes.string,
};
