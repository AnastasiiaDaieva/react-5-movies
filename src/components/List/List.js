import s from 'components/List/List.module.css';

export default function List({ children, heading, additionalClass }) {
  return (
    <>
      <h2>{heading}</h2>
      <ul className={`${s.List}, ${additionalClass}`}>{children}</ul>
    </>
  );
}
