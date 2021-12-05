import './App.css';

import { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router';

import Loading from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';

const HomeView = lazy(() =>
  import('views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MovieSearchView = lazy(() =>
  import('views/MovieSearchView' /* webpackChunkName: "search-view" */),
);

const MovieDetailsView = lazy(() =>
  import('views/MovieDetailsView' /*webpackChunkName: "movie-view" */),
);

function App() {
  const [foundMovies, setFoundMovies] = useState([]);

  const onSetMovies = array => {
    setFoundMovies(prevList => [...prevList, ...array]);
  };

  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/*" element={<HomeView />} />
          <Route
            path="/movies"
            element={
              <MovieSearchView
                onSetMovies={onSetMovies}
                foundMovies={foundMovies}
              />
            }
          />

          <Route path="/movies/:id/*" element={<MovieDetailsView />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
