// import { HomePage, MovieDetailPage, CharacterListPage } from 'pages';
// import { MoviePopularPage } from 'pages/moviePopular';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { CHARACTER_LIST_PAGE, HOME_PAGE, MOVIE_DETAIL_PAGE, MOVIE_POPULAR_PAGE } from 'util/consts';

import {
  HomePage,
  MovieDetailPage,
  CharacterDetailPage,
  CharacterListPage,
  MoviePage,
} from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  CHARACTER_LIST_PAGE,
  CHARACTER_DETAIL_PAGE,
  HOME_PAGE,
  MOVIE_DETAIL_PAGE,
  MOVIE_POPULAR_PAGE,
} from 'util/consts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />}></Route>
        <Route path={MOVIE_POPULAR_PAGE} element={<MoviePage />}></Route>
        <Route path={MOVIE_DETAIL_PAGE} element={<MovieDetailPage />}></Route>
        <Route
          path={CHARACTER_LIST_PAGE}
          element={<CharacterListPage />}
        ></Route>
        <Route
          path={CHARACTER_DETAIL_PAGE}
          element={<CharacterDetailPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
