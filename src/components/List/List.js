import s from 'components/List/List.module.css';

export default function List({
  children,
  heading,
  additionalClass,
  classProp,
}) {
  return (
    <>
      <h2 className={classProp}>{heading}</h2>
      <ul className={`${s.List}, ${additionalClass}`}>{children}</ul>
    </>
  );
}
