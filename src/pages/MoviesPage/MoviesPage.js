import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import MoviesGallery from '../../components/MoviesGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MoviesPage = () => {
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    if (localStorage.getItem('lastQuery')) {
      setQuery(localStorage.getItem('lastQuery'));
    }
    },[])
  

    const formSubmitHandler = formQuery => {
      setQuery(formQuery);
      localStorage.setItem('lastQuery', formQuery);
    };

  

  return (
    <>
      <SearchBar onSubmit={formSubmitHandler} />
      <ToastContainer autoClose={3000} position="top-right" />
      <MoviesGallery query={query} />
    </>
  );
};

export default MoviesPage;
