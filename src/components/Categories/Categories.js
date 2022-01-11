import s from 'components/Categories/Categories.module.css';

import { useState } from 'react';
import PopularPeople from './PopularPeople/PopularPeople';
import Genres from './Genres/Genres';

function Categories() {
  const [loading, setLoading] = useState(false);

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
