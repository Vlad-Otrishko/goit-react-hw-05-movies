import { lazy,Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import s from './App.module.css';

const Home = lazy(() => import('./pages/HomeView' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage' /* webpackChunkName: "movie-details" */),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "not-found" */),
);

const App = () => {
  const url = '';

  return (
    <div className={s.container}>
      <Navigation
        address={[`${url}/`, `${url}/movies`]}
        pageName={['Home', 'Movies']}
      />
      <Suspense fallback={<Loader/> }>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
        </Switch>
      </Suspense>
    </div>
  );
};
export default App;
