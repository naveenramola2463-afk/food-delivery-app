import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FoodList from "./components/FoodList";
import Footer from "./components/Footer";

import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Menu from "./pages/Menu";
import Offers from "./pages/Offers";
import Contact from "./pages/Contact";

function Home({ search, setSearch, category, setCategory }) {
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <Hero />

      <Categories
        category={category}
        setCategory={setCategory}
      />

      <FoodList
        search={search}
        category={category}
      />

      <Footer />
    </>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
          />
        }
      />

      <Route path="/menu" element={<Menu />} />

      <Route path="/offers" element={<Offers />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/success" element={<OrderSuccess />} />
    </Routes>
  );
}

export default App;