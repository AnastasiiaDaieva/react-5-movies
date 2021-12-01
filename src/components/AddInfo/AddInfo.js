// cast
// reviews

import axios from 'axios';
import { useEffect, useState, Suspense, lazy } from 'react';
import { API_KEY, BASE } from 'services/api';
import { Route, Routes, useLocation, useMatch } from 'react-router';
import { Navigate, NavLink } from 'react-router-dom';
import Container from 'components/Container/Container';
import Loading from 'components/Loader/Loader';

const Cast = lazy(() =>
  import('components/Cast/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('components/Reviews/Reviews' /* webpackChunkName: "reviews" */),
);

export default function AddInfo({ id }) {
  const { pathname, state } = useLocation();
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Container>
        <NavLink to={`${pathname}/cast}`} replace state={{ from: state }}>
          Cast
        </NavLink>
        <NavLink to={`${pathname}/reviews`} replace state={{ from: state }}>
          Reviews
        </NavLink>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={`/cast`} element={<Cast />} />
            <Route path={`/reviews`} element={<Reviews />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}
