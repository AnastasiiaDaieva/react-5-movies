import s from 'components/Button/Button.module.css';

export default function Button({ type, text, onClick }) {
  return (
    <button className={s.Button} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
