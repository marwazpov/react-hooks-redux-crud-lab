import React from "react";
import { useDispatch } from "react-redux";
import { reviewRemoved } from "../reviews/reviewsSlice";

function Review({ review }) {
  const { id , comment } = review;
  const dispatch = useDispatch(); 

  function handleDeleteReview(){
    dispatch(reviewRemoved(id))
  }

  return (
    <div>
      <li>{comment}</li>
      <button onClick={handleDeleteReview}> Delete Review </button>
    </div>
  );
}

export default Review;
