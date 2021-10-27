import s from './MoviesPage.module.css';

import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Rejected from '../Rejected/Rejected';
import Loader from '../Loader/Loader';
import IdleMessage from '../IdleMessage/IdleMessage';
// import DefaultPoster from '../../images/default_poster.jpg';
import ApiService from '../../services/API';
// import PropTypes from 'prop-types';
const searchApi = new ApiService();

const MoviesPage = () => {


  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [query, setQuery] = useState('');

  const formSubmitHandler = formQuery => {
    setQuery(formQuery);
  };
  function handleQuery() {
    searchApi
      .searchMovies()
      .then(result => {
        console.log(result);
        if (result.results.length > 0) {
          updateImagesArray(result.results);
          searchApi.page += 1;
          return result;
        }
        throw new Error(`Sorry, but no result for ${searchApi.query}`);
      })
      .catch(error => { setError(error); setStatus('rejected') });
  }

  const updateImagesArray = update => {
    setStatus('resolved');
    // if (searchApi.page === 1) {
      return setMovies(update);
    // }
    // return setMovies(movies=>[...movies, ...update]);
  };

  useEffect(() => {
    if (!query) {
    setStatus('pending');
      searchApi.searchType = 0;
      handleQuery();
      return;
    }
    setStatus('pending');
    searchApi.reset();
    searchApi.searchType = 1;
    searchApi.request = query;
    handleQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (movies.length === 0) { return; }
    // console.log('from scroll', images, images.length);
    // if (movies.length > 20) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    // }
}, [movies]
  )

 const  loadMore=()=> {
    setStatus('pending');
    handleQuery();
  }

    if (status === 'idle') {
      return <IdleMessage/>;
    }
    if (status === 'pending') {
      return <Loader/>;
    }
    if (status === 'rejected') {
     return <Rejected message={error.message}/>
    }
    if (status === 'resolved') {
      return (
        <>
          <SearchBar onSubmit={formSubmitHandler} />
          <ul className={s.ImageGallery}>
            {movies.map(movie => (
              <ImageGalleryItem
                key={movie.id}
                route={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                bigPicture={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                description={movie.original_title}
              />
            ))}
          </ul>
          <Button handleClick={loadMore} />
        </>
      );
    }
  }

export default MoviesPage;

