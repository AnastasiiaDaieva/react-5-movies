// user score
// overview
// genres

import Container from 'components/Container/Container';
import List from 'components/List/List';

export default function MovieCard({
  title,
  score,
  poster,
  overview,
  genres,
  id,
}) {
  console.log(genres);

  return (
    <Container>
      <img alt={title} src={`https://image.tmdb.org/t/p/w300/${poster}`} />
      <Container>
        <h2>{title}</h2>
        <p>{score > 0 && score}</p>
        <p>{overview}</p>
        <List>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </List>
      </Container>
    </Container>
  );
}
