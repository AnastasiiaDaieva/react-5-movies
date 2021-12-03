import s from 'components/Button/Button.module.css';

export default function Button({ type, text, onClick, children }) {
  return (
    <button className={s.Button} type={type} onClick={onClick}>
      {text} {children}
    </button>
  );
}
