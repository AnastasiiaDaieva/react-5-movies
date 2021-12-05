import axios from 'axios';
import { API_KEY, BASE } from 'services/api';

import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';
import { lazy } from 'react';

import MovieCard from 'components/MovieCard/MovieCard';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import Icon from 'images/arrow-back.svg';
import Loading from 'components/Loader/Loader';

const AddInfo = lazy(() =>
  import('components/AddInfo/AddInfo' /*webpackChunkName: "add-info" */),
);

export default function MovieDetailsView() {
  const [movie, setMovie] = useState({ budget: 0, runtime: 0 });
  const { id } = useParams();
  const location = useLocation();
  console.log('mdv', location);
  const pathname = location.state?.from?.pathname;
  const search = location.state?.from?.search;
  console.log('search', search);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [reviews, setReviews] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${BASE}/movie/${id}?api_key=${API_KEY}&language=en-US
`,
      )
      .then(response => {
        setMovie(response.data);
        // console.log(response.data);
        // console.log(movie);
      });
  }, [id]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${BASE}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
      )
      .then(response => setReviews(response.data.results))
      .catch(error => console.log(error.message))
      .finally(() => setLoading(false));
    // console.log(reviews);
  }, [id]);

  useEffect(() => {
    axios
      .get(`${BASE}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then(response => setCast(response.data.cast))
      .catch(error => console.log(error.message))
      .finally(() => setLoading(false));

    // console.log(cast);
  }, [id]);
  const onGoBack = () => {
    navigate(-1);
  };
  const {
    vote_average,
    title,
    poster_path,
    overview,
    release_date,
    genres = [],
  } = movie;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Button
            icon={<Icon />}
            onClick={onGoBack}
            type="button"
            text="Go back"
          >
            {/* <Link to={pathname ? `${pathname}${search}` : '/movies'}>go back</Link> */}
          </Button>
          <MovieCard
            score={vote_average}
            title={title}
            poster={poster_path}
            overview={overview}
            genres={genres}
            id={id}
            date={release_date}
          />
          <AddInfo id={id} title={title} reviews={reviews} cast={cast} />
        </Container>
      )}
    </>
  );
}
