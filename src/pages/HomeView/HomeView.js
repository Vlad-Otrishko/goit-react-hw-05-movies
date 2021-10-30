import { useEffect } from 'react';
import MoviesGallery from '../../components/MoviesGallery'
import s from './HomeView.module.css';

const Home = () => {
  useEffect(() => {
    localStorage.clear();
});


  return (
    <>
      <h1 className={s.title }>MOST POPULAR NOW:</h1>
      <MoviesGallery />
      </>
  );
};

export default Home;
