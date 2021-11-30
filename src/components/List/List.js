import s from 'components/List/List.module.css';

export default function List({ children, heading }) {
  return (
    <>
      <h2>{heading}</h2>
      <ul className={s.List}>{children}</ul>
    </>
  );
}
