import s from './GenreItem.module.css';
import { activeStyle } from 'components/Header/Header';
import { NavLink } from 'react-router-dom';

function GenreItem({ id, name, addClass }) {
  return (
    <li
      id={id}
      className={addClass ? `${s.Genres__item}, ${addClass}` : s.Genres__item}
    >
      <NavLink
        to={`/genre/${id}`}
        className={s.Genres__link}
        style={activeStyle}
      >
        {name}
      </NavLink>
    </li>
  );
}

export default GenreItem;
