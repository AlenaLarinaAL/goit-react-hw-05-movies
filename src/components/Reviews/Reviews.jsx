import { Section } from 'components';
import { ReviewItem } from 'components/ReviewsItem/ReviewsItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/Api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(console.log);
  }, [movieId]);

  return (
    <>
      <Section>
        {reviews.length ? (
          <ul>
            {reviews.map(review => (
              <ReviewItem key={review.id} {...review} />
            ))}
          </ul>
        ) : (
          <div>There are no reviews for this movie yet.</div>
        )}
      </Section>
    </>
  );
};
