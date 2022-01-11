import axios from 'axios';
import { useEffect } from 'react';
import { BASE, API_KEY } from 'services/api';
import { useState } from 'react';
import s from 'components/Categories/PopularPeople/PopularPeople.module.css';

function PopularPeople() {
  const [loading, setLoading] = useState(false);

  const [popularPeople, setPopularPeople] = useState([]);

  console.log(popularPeople);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE}/person/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => {
        setPopularPeople(response.data.results);
        // console.log(response.data.results);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className={s.PopularPeople}>
      <h3 className={s.PopularPeople__heading}>Popular People</h3>
      <ul className={s.PopularPeople__list}>
        {popularPeople
          .slice(0, 6)
          .map(({ name, profile_path, id, known_for: work }) => (
            <article key={id} className={s.PopularPeople__thumb}>
              <li>
                <img
                  className={s.PopularPeople__photo}
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={name}
                />
                <p className={s.PopularPeople__name}>{name}</p>

                {work.length > 0 && (
                  <details>
                    Known for:
                    <ul className={s.PopularPeople__known}>
                      {work.map(({ id, original_name, title }) => (
                        <li key={id}>
                          {original_name ? original_name : title}
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </li>
            </article>
          ))}
      </ul>
    </div>
  );
}
export default PopularPeople;
