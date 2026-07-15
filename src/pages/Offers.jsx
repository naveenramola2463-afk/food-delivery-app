import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Offers() {
  return (
    <>
      <Navbar />

      <div className="offers-page">
        <h1>🔥 Today's Offers</h1>

        <div className="offer-card">
          🍕 Buy 1 Get 1 Free
        </div>

        <div className="offer-card">
          🍔 Flat 30% OFF
        </div>

        <div className="offer-card">
          🥤 Free Cold Drink Above ₹499
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Offers;