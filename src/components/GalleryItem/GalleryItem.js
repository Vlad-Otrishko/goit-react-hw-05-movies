import { Link } from 'react-router-dom';
import s from './GalleryItem.module.css';
import PropTypes from 'prop-types';
import DefaultPoster from '../../images/default_poster.jpg';

const GalleryItem = ({id,route,description,bigPicture})=>{

    return (
      <>
        <li className={s.GalleryItem}>
          <Link to={`movies/${id}`} className={s.movieLink}>
            <img
              src={route}
              alt={description}
              data-source={bigPicture}
              className={s['GalleryItem-image']}
              onError={event => (event.target.src = DefaultPoster)}
            />
            <h2 className={s.gallery__title}>{description}</h2>
          </Link>
        </li>
      </>
    );
}

export default GalleryItem;

GalleryItem.propTypes = {
  route: PropTypes.string,
  description: PropTypes.string,
  bigPicture: PropTypes.string,
};