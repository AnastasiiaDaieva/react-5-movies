import s from 'components/List/List.module.css';

export default function List({ children }) {
  return <ul className={s.List}>{children}</ul>;
}
