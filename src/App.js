import './App.css';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router';
// import HomeView from 'views/HomeView';
// import MovieSearchView from 'views/MovieSearchView';
// import MovieView from 'views/MovieView';
// import AddInfoSubView from 'views/AddInfoSubView';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
// import Searchbar from 'components/Searchbar/Searchbar';
import Loading from 'components/Loader/Loader';
import Header from 'components/Header/Header';

const HomeView = lazy(() =>
  import('views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const MovieSearchView = lazy(() =>
  import('views/MovieSearchView' /* webpackChunkName: "search-view" */),
);

const MovieView = lazy(() =>
  import('views/MovieView' /*webpackChunkName: "movie-view" */),
);
function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/search" element={<MovieSearchView />} />

          <Route path="/movie/:id/*" element={<MovieView />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
