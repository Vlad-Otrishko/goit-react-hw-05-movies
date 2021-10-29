import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import s from './MoviesGallery.module.css';

import GalleryItem from '../GalleryItem';
import Button from '../Button';
import Rejected from '../Rejected';
import Loader from '../Loader';
import IdleMessage from '../IdleMessage';
import ApiService from '../../services/API';
import PropTypes from 'prop-types';
const searchApi = new ApiService();
const MoviesGallery = ({ query }) => {

  const { pathname } = useLocation();

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  function handleQuery() {
    searchApi
      .searchMovies()
      .then(result => {
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
      return setMovies(update);
  };

  useEffect(() =>
    searchApi.reset(),[]
  )


  useEffect(() => {
    if (!query && pathname === '/movies') { setMovies([]); return; }
      if (!query) {
        setStatus('pending');
        searchApi.searchType = 0;
        handleQuery();
        // setStatus('idle');
        return;
      }
    setStatus('pending');
    searchApi.reset();
    searchApi.searchType = 1;
    searchApi.request = query;
    handleQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);


//   useEffect(() => {
//     if (movies.length === 0) { return; }
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
// }, [movies]
  // )

  const loadMore = () => {
    console.log('query=', query)
    if (!query && pathname === '/movies')
    {
      toast.error('Please, indicate the Movie\'s name or keyword');
      setStatus('idle');
      return;
    }
    setStatus('pending');
    handleQuery();
    setStatus('idle');

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
          <ul className={s.MoviesGallery}>
            {movies.map(movie => (
              <GalleryItem
                key={movie.id}
                id={movie.id}
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

export default MoviesGallery;

Button.propTypes = {
  query: PropTypes.string,
};
