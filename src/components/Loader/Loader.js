import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from 'components/Loader/Loader.module.css';

export default function Loading() {
  return (
    <Loader
      className={s.Loading}
      type="ThreeDots"
      color="#c8d8e4"
      height={200}
      width={200}
    />
  );
}
