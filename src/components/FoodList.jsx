import FoodCard from "./FoodCard";
import foodData from "../Data/foodData";

function FoodList({ search, category }) {
  const filteredFoods = foodData.filter((food) => {
    const searchMatch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" ||
      food.category === category;

    return searchMatch && categoryMatch;
  });

  return (
    <section id="menu" className="food-list">
      <h2>Popular Indian Foods 🇮🇳</h2>

      <div className="foods">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))
        ) : (
          <h2>No Food Found 😔</h2>
        )}
      </div>
    </section>
  );
}

export default FoodList;