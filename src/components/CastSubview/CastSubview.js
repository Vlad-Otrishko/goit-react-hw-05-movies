import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiService from '../../services/API';
import DefaultPoster from '../../images/default_poster.jpg';
import s from './CastSubview.module.css';
const searchApi = new ApiService();

const CastSubview = () => {
  const {movieId} = useParams();
  const [actors, setActors] = useState([]);
  const queryString = movieId + '/credits';

  useEffect(() => {
    searchApi.reset();
    searchApi.searchType = 2;
    searchApi.request = queryString;
    searchApi.searchMovies().then(result => {
      console.log('result', result);
      setActors(result.cast);
    });
  }, [queryString]);

  return (
    actors && (
          <ul className={s.actorList}>
        {actors.map(actor => (
            <li className={s.actorData} key={actor.id}>
            <h3 className={s.character}>{actor.character}</h3>
            <h3 className={s.name}>{actor.name}</h3>
            <img className={s.actorPhoto}
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              onError={event => (event.target.src = DefaultPoster)}
            />
            <p>Popularity:{actor.popularity} </p>
          </li>
        ))}
      </ul>
    )
  );
};

export default CastSubview;
