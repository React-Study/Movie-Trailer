import { HomePage, MovieDetailPage } from 'pages';
import { MoviePopularPage } from 'pages/moviePopular';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HOME_PAGE, MOVIE_DETAIL_PAGE, MOVIE_POPULAR_PAGE } from 'util/consts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />}></Route>
        <Route path={MOVIE_POPULAR_PAGE} element={<MoviePopularPage />}></Route>
        <Route path={MOVIE_DETAIL_PAGE} element={<MovieDetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
