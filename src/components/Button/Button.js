import s from 'components/Button/Button.module.css';

export default function Button({ type, text }) {
  return (
    <button className={s.Button} type={type}>
      {text}
    </button>
  );
}
