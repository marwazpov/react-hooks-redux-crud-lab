import React from "react";

import RestaurantInput from "./RestaurantInput";
import Restaurants from "./Restaurants";

function RestaurantsContainer() {
  // const dispatch = useDispatch();
 
  return (
    <div>
      <RestaurantInput />
      <Restaurants/>

      
    </div>
  );
}

export default RestaurantsContainer;
