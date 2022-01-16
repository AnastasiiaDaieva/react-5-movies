import s from 'components/Categories/Categories.module.scss';

import PopularPeople from './PopularPeople/PopularPeople';
import Genres from './Genres/Genres';

function Categories() {
  return (
    <div>
      <aside className={s.Categories}>
        <PopularPeople />
        <Genres />
      </aside>
    </div>
  );
}

export default Categories;
