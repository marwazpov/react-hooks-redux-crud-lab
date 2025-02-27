import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { useDispatch } from "react-redux";
import { restaurantRemoved } from "./restaurantsSlice";

function Restaurant({ restaurant }) {
  const { id, name } = restaurant;
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(restaurantRemoved(id));
  }

  return (
    <div>
      <li>
        {name}
        <button onClick={handleDeleteClick}> Delete Restaurant </button>
        <ReviewsContainer restaurantId={id} />
      </li>
    </div>
  );
}

export default Restaurant;