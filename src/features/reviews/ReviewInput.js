import { useState } from "react";
import Reviews from "./Reviews";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput({ restaurantId }) {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  function handleInputChange(event) {
    setComment(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(reviewAdded({ comment: comment, restaurantId: restaurantId }));
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment
        <textarea
          type="text"
          name="comment"
          value={comment}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Review</button>
    </form>
  );
}

export default ReviewInput;