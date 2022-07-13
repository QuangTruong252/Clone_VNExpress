import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './pages/Category/Category';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import ErrorPage from './pages/404Page/ErrorPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/error-page'} element={<ErrorPage />} />
        <Route path={''} element={<MainPage />}>
          <Route index element={<Home />} />
          <Route path={'search/:search_title'} element={<Search />} />
          <Route path={':category/:sub'} element={<Category />} />
          <Route path={':category'} element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
