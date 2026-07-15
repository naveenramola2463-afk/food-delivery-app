import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

function Navbar({ search = "", setSearch = () => {} }) {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">🍔 Foodie</h2>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/menu">Menu</Link>
          </li>

          <li>
            <Link to="/offers">Offers</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className="search-box">
          <FaSearch />

          <input
            type="text"
            placeholder="Search Food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div
          className="cart-icon"
          onClick={() => setShowCart(!showCart)}
        >
          <FaShoppingCart />
          <span>{cart.length}</span>
        </div>
      </nav>

      {showCart && (
        <div className="cart-sidebar">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p>Cart is Empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <h4>{item.name}</h4>

                  <p>Qty : {item.quantity}</p>

                  <p>
                    ₹
                    {(item.price || item.caloriesPerServing) *
                      item.quantity}
                  </p>
                </div>
              ))}

              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;