// go back button

import { useParams, useNavigate, useLocation } from 'react-router';
import { lazy } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import axios from 'axios';
import { API_KEY, BASE } from 'services/api';
import Button from 'components/Button/Button';
import { useState, useEffect } from 'react';
import Icon from 'images/arrow-back.svg';
import Container from 'components/Container/Container';

const AddInfo = lazy(() =>
  import('components/AddInfo/AddInfo' /*webpackChunkName: "add-info" */),
);

export default function MovieDetailsView() {
  const [movie, setMovie] = useState({ budget: 0, runtime: 0 });
  const { id } = useParams();
  let location = useLocation();
  const navigate = useNavigate();
  console.log(useNavigate);

  const [reviews, setReviews] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
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
    axios
      .get(
        `${BASE}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
      )
      .then(response => setReviews(response.data.results))
      .catch(error => console.log(error.message));
    // console.log(reviews);
  }, [id]);

  useEffect(() => {
    axios
      .get(`${BASE}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then(response => setCast(response.data.cast))
      .catch(error => console.log(error.message));

    console.log(cast);
  }, [id]);

  // const onGoBack =

  const {
    vote_average,
    title,
    poster_path,
    overview,
    release_date,
    genres = [],
  } = movie;
  return (
    <Container>
      <Button
        icon={<Icon />}
        onClick={() => navigate(-1)}
        type="button"
        text="Go back"
      >
        <Link
          to={
            location?.state?.from?.pathname
              ? location?.state?.from?.pathname.location.state?.from?.search
              : '/'
          }
        ></Link>
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
  );
}
