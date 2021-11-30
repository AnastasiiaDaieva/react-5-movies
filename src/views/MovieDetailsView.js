// go back button

import { Routes, Route, useParams, useNavigate } from 'react-router';
import { Suspense, lazy } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import Loading from 'components/Loader/Loader';
import axios from 'axios';
import { API_KEY, BASE } from 'services/api';
import Button from 'components/Button/Button';
import { useState, useEffect } from 'react';

const AddInfoSubView = lazy(() =>
  import('views/AddInfoSubView' /*webpackChunkName: "add-info-view" */),
);

const Cast = lazy(() =>
  import('components/Cast/Cast' /*webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('components/Reviews/Reviews' /*webpackChunkName: "reviews" */),
);

// sub additional information

export default function MovieDetailsView() {
  const [movie, setMovie] = useState({ budget: 0, runtime: 0 });
  const { id } = useParams();
  const navigate = useNavigate();

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
      />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="addinfo" element={<AddInfoSubView />}>
            {/* <Route path="/cast" element={<Cast />} />
            <Route path="/reviews" element={<Reviews />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
