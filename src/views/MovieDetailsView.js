import { useParams, useNavigate, useLocation } from 'react-router';
import Button from 'components/Button/Button';
import MovieCard from 'components/MovieCard/MovieCard';
import Container from 'components/Container/Container';
import Icon from 'images/arrow-back.svg';

export default function MovieDetailsView() {
  const getData = useParams();
  console.log(getData);
  const { id } = useParams();
  const location = useLocation();
  console.log('MovieDetailsView', location);
  const search = location.state?.from?.search;
  console.log('search', search);
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Button icon={<Icon />} onClick={onGoBack} type="button" text="Go back" />
      <MovieCard id={id} />
    </Container>
  );
}
