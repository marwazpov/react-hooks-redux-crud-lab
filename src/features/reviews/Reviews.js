import React from "react";
import Review from "./Review";
import { useSelector } from "react-redux";

function Reviews({restaurantId }) {
  const reviews = useSelector((state)=>state.reviews.entities);

  const filteredReviews = reviews.filter(
    (review) => review.restaurantId === restaurantId
  );

  const displayReview= filteredReviews.map((review)=>(
    < Review key={review.id} review={review}/>
  ));
  
  return <ul>{displayReview}</ul>;
}

export default Reviews;
