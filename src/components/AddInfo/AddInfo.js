import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

import Container from 'components/Container/Container';
import Loading from 'components/Loader/Loader';

import s from 'components/AddInfo/AddInfo.module.css';

import PropTypes from 'prop-types';

const Cast = lazy(() =>
  import('components/Cast/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('components/Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function AddInfo({ id, reviews, cast }) {
  const { state } = useLocation();

  return (
    <>
      <Container additionalClass={s.AddInfo__links}>
        <NavLink
          to={`cast`}
          className={s.AddInfo__item}
          replace
          state={{ from: state }}
        >
          Cast
        </NavLink>
        <NavLink
          to={`reviews`}
          className={s.AddInfo__item}
          replace
          state={{ from: state }}
        >
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

AddInfo.propTypes = {
  id: PropTypes.string,
  reviews: PropTypes.array,
  cast: PropTypes.array,
};
