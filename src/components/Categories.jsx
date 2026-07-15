function Categories({ category, setCategory }) {
  const items = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack"
  ];

  return (
    <section className="categories">
      <h2>Categories</h2>

      <div className="category-list">
        {items.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categories;