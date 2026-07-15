import { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import foodData from "../Data/foodData.js";

function Menu() {
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
     "North Indian",
  "South Indian",
  "Biryani",
  "Thali",
  "Street Food",
  "Snacks",
  "Drinks",
  "Dessert",
  ];

  const filteredFoods = foodData.filter((food) => {
    const matchCategory =
      category === "All" || food.category === category;

    const matchSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <div className="menu-page">

        <h1>🍽 Our Menu</h1>

        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={
                category === cat ? "active-btn" : ""
              }
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredFoods.map((food) => (
            <div
              className="menu-card"
              key={food.id}
            >
              <img
                src={food.image}
                alt={food.name}
              />

              <h3>{food.name}</h3>

              <p>⭐ {food.rating}</p>

              <h2>₹{food.price}</h2>

              <p>{food.offer}</p>

              <button
                onClick={() => addToCart(food)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Menu;