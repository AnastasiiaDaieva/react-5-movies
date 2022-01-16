import { NavLink } from 'react-router-dom';
import React from 'react';
import { ReactComponent as Logo } from 'images/logo.svg';

import s from 'components/Header/Header.module.scss';

export const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? '#12545C' : '',
    textShadow: isActive ? '#306970 1px 0 1px' : '',
  };
};
export function Header() {
  return (
    <header className={s.Header}>
      <Logo className={s.Header__logo} />
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
