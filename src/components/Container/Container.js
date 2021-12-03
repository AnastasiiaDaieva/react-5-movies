import s from 'components/Container/Container.module.css';

export default function Container({ children, additionalClass }) {
  return (
    <div className={`${additionalClass}, ${s.Container} `}>{children}</div>
  );
}
