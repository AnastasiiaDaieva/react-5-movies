// author
// review
import Container from 'components/Container/Container';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import List from 'components/List/List';
import s from 'components/Reviews/Reviews.module.css';

export default function Reviews({ reviewsArray }) {
  const [showLess, setShowLess] = useState(true);
  // console.log('reviewsArray', reviewsArray);

  const splitContent = text => {
    let split = text.split(/(?:\r?\n)+/);
    let items = [];
    split.map(item => {
      items.push(
        <p key={nanoid()} className={s.Reviews__passage}>
          {item}
        </p>,
      );
    });
    return items;
  };

  return (
    <Container>
      {reviewsArray.length > 0 ? (
        <List additionalClass={s.Reviews__list}>
          {reviewsArray.map(({ author, author_details, content, id }) => (
            <li key={id} className={s.Reviews__item}>
              <div className={s.Reviews__author}>
                <span>{author}</span> <span>{author_details.rating}</span>
              </div>
              <div>
                {splitContent(content).length > 200
                  ? splitContent(content)
                  : splitContent(content).slice(0, 100)}
              </div>
            </li>
          ))}
        </List>
      ) : (
        <h2>Sorry, there are no reviews on this film</h2>
      )}
    </Container>
  );
}
