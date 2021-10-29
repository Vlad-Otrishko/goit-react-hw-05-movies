/* eslint-disable react-hooks/exhaustive-deps */
import { Switch, useParams, Route, useRouteMatch,useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense} from 'react';
import ApiService from '../../services/API';
import Navigation from '../../components/Navigation';
import Loader from '../../components/Loader';

import s from './MovieDetailsPage.module.css';
import DefaultPoster from '../../images/default_poster.jpg';
const searchApi = new ApiService();

const CastSubview = lazy(() =>
  import('../../components/CastSubview' /* webpackChunkName: "Cast" */),
);
const ReviewsSubview = lazy(() =>
  import(
    '../../components/ReviewsSubview' /* webpackChunkName: "Reviews" */
  ),
);

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const { url, path } = useRouteMatch();

  const history = useHistory();
  const location = useLocation();
  console.log(location);

  //записываем значение пути исходной страницы(откуда пришли) в локальное хранилище,
  //чтобы значение можно было использовать после перехода на Review или Сast
  //чтобы это было один раз на странице - "запихиваем" эту процедуру в useEffect, с пустой зависимостью
  useEffect(() => {
    if (location.state) {
      localStorage.setItem(
        'location',
        JSON.stringify(location.state.from.location.pathname),
      );
    }
  }, []);

  //устанавливаем название кнопки в зависимости откуда мы переходим на страницу фильма - c "Домашней"
  //страницы или с 'Movies'. на эту же страницу и будем возвращаться.
  let buttonName = '';
  if (JSON.parse(localStorage.getItem('location')) === '/movies') {
    buttonName = 'Movies';
  } else {
    buttonName = 'Home Page';
  }

  const onGoBack = () => {
    history.push(JSON.parse(localStorage.getItem('location')) ?? '/');
    localStorage.clear();
  };

  useEffect(() => {
    searchApi.reset();
    searchApi.searchType = 2;
    searchApi.request = movieId;
    searchApi.searchMovies().then(result => {
      setMovie(result);
    });
  }, [movieId]);

  return (
    movie && (
      <div className={s.container}>
        <div className={s.cardWrapper}>
          <img
            className={s.image}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            onError={event => (event.target.src = DefaultPoster)}
          />
          <div className={s.description__wrapper}>
            <h1 className={s.movie__title}>{movie.title}</h1>
            <p className={s.tagLine}>Slogan: {movie.tagline}</p>
            <p className={s.movie__information}>{movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Release date: {movie.release_date}</p>
            <p>Runtime: {movie.runtime} minutes</p>
            <h2 className={s.subtitle}>Financial status:</h2>
            <p className={s.financial}>
              <span>Budget: {movie.budget} USD</span>
              <span>Revenue: {movie.revenue} USD</span>
            </p>
            <p className={s.subtitle}>
              Homepage:
              <a href={movie.homepage}> {movie.homepage}</a>
            </p>
          </div>
        </div>
        <div className={s.navigation__block}>
          <Navigation
            address={[`${url}/cast`, `${url}/reviews`]}
            pageName={['Cast', 'Reviews']}
          />
          <button type="button" onClick={onGoBack}>
            back to {buttonName}
          </button>
        </div>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path={`${path}/cast`}>
              <CastSubview />
            </Route>
            <Route path={`${path}/reviews`}>
              <ReviewsSubview />
            </Route>
          </Switch>
        </Suspense>
      </div>
    )
  );
};

export default MovieDetailsPage;
