import React from "react";
import Restaurant from "./Restaurant";
import { useSelector } from "react-redux";

function Restaurants() {
  const restaurants = useSelector((state) => state.restaurants.entities);
  const displayRestaurant = restaurants.map((restaurant)=>(
    < Restaurant key={restaurant.id} restaurant={restaurant}/>
  ));

  return (
      
  <ul>
  {displayRestaurant}
 </ul>

  )


}

export default Restaurants;
