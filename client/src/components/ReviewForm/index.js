import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';
import { QUERY_REVIEWS, QUERY_ME } from '../../utils/queries';
import "./ReviewForm.css"

//images
// import ReviewImage from "../../assets/profile/review.jpg"

const ReviewForm = () => {
  const [reviewText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addReview, { error }] = useMutation(ADD_REVIEW, {
    update(cache, { data: { addReview } }) {
      try {
        // could potentially not exist yet, so wrap in a try...catch
        const { reviews } = cache.readQuery({ query: QUERY_REVIEWS });
        cache.writeQuery({
          query: QUERY_REVIEWS,
          data: { reviews: [addReview, ...reviews] }
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache, appending new review to the end of the array
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, reviews: [...me.reviews, addReview] } }
        });
      } catch (e) {
        console.error(e);
      }
    }
  });

  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      // add review to database
      await addReview({
        variables: { reviewText }
      });

      // clear form value
      setText('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='review-container'>
      <form className="field" onSubmit={handleFormSubmit}>
        <div className='field-input '>
          <label className="label">Here's what I thought... </label>
          <div className="control">
            <input className="input" type="text" placeholder="Everything was great!" onChange={handleChange} value={reviewText}>
            </input>
          </div>
        </div>
        {console.log("CHARACTER COUNT: " + characterCount)}
        <p className={`${characterCount === 280 || error ? 'text-error' : ''}`}>
          Character Count: {characterCount}/280 <br />
          {error && <span className=""> Something went wrong...</span>}
        </p>
        <div>
          <button className="button control is-danger" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;