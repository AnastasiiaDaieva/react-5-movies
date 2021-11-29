import { NavLink } from 'react-router-dom';
import s from 'components/Header/Header.module.css';

export default function Header() {
  return (
    <header className={s.Header}>
      <nav className={s.Header__navigation}>
        <NavLink
          to="/"
          className={s.Header__item}
          style={({ isActive }) => {
            return {
              color: isActive ? '#1340d4' : '',
            };
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/search"
          className={s.Header__item}
          style={({ isActive }) => {
            return {
              color: isActive ? '#1340d4' : '',
            };
          }}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
