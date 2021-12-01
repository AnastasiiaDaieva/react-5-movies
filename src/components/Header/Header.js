import { NavLink } from 'react-router-dom';
import s from 'components/Header/Header.module.css';

export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? '#1340d4' : '',
  };
};
export function Header() {
  return (
    <header className={s.Header}>
      <nav className={s.Header__navigation}>
        <NavLink to="/" className={s.Header__item} style={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.Header__item} style={activeStyle}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
