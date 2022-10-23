import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from 'Servises/fetchMovies';


const Reviews = () => {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReview(movieId)
      .then(({ results }) =>
        results.map(result => ({
          author: result.author,
          content: result.content,
          id: result.id,
        }))
      )
      .then(oneReview => setReview(oneReview));
  }, [movieId]);
  console.log(fetchMovieReview(movieId));

  if (!review) {
    return null;
  }

  return (
    <div>
      {review.length > 0 ? (
        <div>
          {review.map(({ author, content, id }) => (
            <div key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Sorry, no review :( </div>
      )}
    </div>
  );
};

export default Reviews;
