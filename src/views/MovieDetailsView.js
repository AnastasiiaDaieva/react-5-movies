// go back button

import { useParams, useNavigate } from 'react-router';
import { lazy } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import axios from 'axios';
import { API_KEY, BASE } from 'services/api';
import Button from 'components/Button/Button';
import { useState, useEffect } from 'react';

const AddInfo = lazy(() =>
  import('components/AddInfo/AddInfo' /*webpackChunkName: "add-info" */),
);

// const Cast = lazy(() =>
//   import('components/Cast/Cast' /*webpackChunkName: "cast" */),
// );
// const Reviews = lazy(() =>
//   import('components/Reviews/Reviews' /*webpackChunkName: "reviews" */),
// );

// sub additional information

export default function MovieDetailsView() {
  const [movie, setMovie] = useState({ budget: 0, runtime: 0 });
  const { id } = useParams();
  const navigate = useNavigate();

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
        console.log(response.data);
        console.log(movie);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${BASE}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
      )
      .then(response => setReviews(response.data.results))
      .catch(error => console.log(error.message));
    console.log(reviews);
  }, [id]);

  useEffect(() => {
    axios
      .get(`${BASE}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then(response => setCast(response.data.cast))
      .catch(error => console.log(error.message));

    console.log(cast);
  }, [id]);

  const { vote_average, title, poster_path, overview, genres = [] } = movie;
  return (
    <>
      <Button onClick={() => navigate(-1)} type="button" text="Go back" />
      <MovieCard
        score={vote_average}
        title={title}
        poster={poster_path}
        overview={overview}
        genres={genres}
        id={id}
      />
      <AddInfo id={id} title={title} reviews={reviews} cast={cast} />
    </>
  );
}
