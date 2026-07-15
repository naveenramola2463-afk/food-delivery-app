import { useContext } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

function FoodCard({ food }) {
   
  const { addToCart } = useContext(CartContext);

  return (
    <div className="food-card">
      <div className="food-image">
        <img src={food.image} alt={food.name} />

        <span className="offer">
          {food.cuisine || food.offer}
        </span>

        <FaHeart className="heart" />
      </div>

      <div className="food-content">
        <h3>{food.name}</h3>

        <div className="food-info">
          <span className="rating">
            <FaStar /> {food.rating}
          </span>

          <span>{food.cookTimeMinutes || 25} min</span>
        </div>

        <p className="food-desc">
          {food.tags ? food.tags.join(", ") : "Fresh & Delicious Food"}
        </p>

        <div className="price-row">
          <h2>₹{food.price || food.caloriesPerServing}</h2>

          <button onClick={() => addToCart(food)}>
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;