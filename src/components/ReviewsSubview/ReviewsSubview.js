import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiService from '../../services/API';
import DefaultPoster from '../../images/default_poster.jpg';
import s from './ReviewsSubview.module.css';
import Rejected from '../Rejected';
const searchApi = new ApiService();

const ReviewsSubview = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const queryString = movieId + '/reviews';

  useEffect(() => {
    searchApi.reset();
    searchApi.searchType = 2;
    searchApi.request = queryString;
    searchApi.searchMovies().then(result => {
      setReviews(result.results);
    });
  }, [queryString]);

  return (
    reviews.length>0 ? (
      <ul className={s.reviewsList}>
        {reviews.map(review => (
          <li className={s.reviewData} key={review.id}>
            <h3 className={s.author}>{review.author}</h3>
            <p className={s.rating}>
              Author's rating: {review.author_details.rating}
            </p>
            <img
              className={s.avatar}
              src={`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`}
              alt={reviews.author}
              onError={event => (event.target.src = DefaultPoster)}
            />
            <p className={s.content}>{review.content} </p>
            <p className={s.createdDate}>{review.created_at}</p>
            <p className={s.updatedDate}>{review.updated_at}</p>
            <a className={s.reviewPage} href={review.url}>
              {review.url}
            </a>
          </li>
        ))}
      </ul>
    ):<Rejected message='Sorry, but no reviews are available'/>
  );
};

export default ReviewsSubview;
