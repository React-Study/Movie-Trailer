import { HomePage } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HOME_PAGE } from 'util/consts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE} element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
