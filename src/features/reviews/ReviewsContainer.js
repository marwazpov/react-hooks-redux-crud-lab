import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

function ReviewsContainer({restaurantId }) {
  return (
    <div>
      <ReviewInput restaurantId = {restaurantId} />
      <Reviews restaurantId = {restaurantId} />
    </div>
  );
}

export default ReviewsContainer;
