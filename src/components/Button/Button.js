import s from 'components/Button/Button.module.css';

export default function Button({ text }) {
  return <button className={s.Button}>{text}</button>;
}
