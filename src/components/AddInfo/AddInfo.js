// cast
// reviews

import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import Container from 'components/Container/Container';
import Loading from 'components/Loader/Loader';

const Cast = lazy(() =>
  import('components/Cast/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('components/Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function AddInfo({ id, reviews, cast }) {
  const { pathname, state } = useLocation();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Container>
        <NavLink to={`cast`} replace state={{ from: state }}>
          Cast
        </NavLink>
        <NavLink to={`reviews`} replace state={{ from: state }}>
          Reviews
        </NavLink>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path={`cast`}
              element={<Cast id={id} castArray={cast} additional />}
            />
            <Route
              path={`reviews`}
              element={<Reviews id={id} reviewsArray={reviews} />}
            />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}
