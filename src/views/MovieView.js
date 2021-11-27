// go back button

import { Routes, Route } from 'react-router';
import { Suspense, lazy } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import Loading from 'components/Loader/Loader';

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

export default function MovieView() {
  return (
    <>
      <MovieCard />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="addinfo" element={<AddInfoSubView />}>
            <Route path="/cast" element={<Cast />} />
            <Route path="/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
