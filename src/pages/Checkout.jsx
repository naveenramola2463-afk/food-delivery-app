import { useNavigate } from "react-router-dom";





import { useState } from "react";

function Checkout() {
     const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const subtotal = 999;
  const gst = 50;
  const delivery = 40;
  const total = subtotal + gst + delivery;

 const placeOrder = () => {
  navigate("/success");
};

  return (
    <div className="checkout-container">

      <h1>Checkout</h1>

      <div className="bill-box">

        <h2>Bill Summary</h2>

        <div className="bill-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="bill-row">
          <span>GST</span>
          <span>₹{gst}</span>
        </div>

        <div className="bill-row">
          <span>Delivery</span>
          <span>₹{delivery}</span>
        </div>

        <hr />

        <div className="bill-row total">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

      </div>

      <div className="payment-box">

        <h2>Select Payment</h2>

        <label>
          <input
            type="radio"
            checked={paymentMethod === "UPI"}
            onChange={() => setPaymentMethod("UPI")}
          />
          UPI
        </label>

        <label>
          <input
            type="radio"
            checked={paymentMethod === "Card"}
            onChange={() => setPaymentMethod("Card")}
          />
          Credit / Debit Card
        </label>

        <label>
          <input
            type="radio"
            checked={paymentMethod === "COD"}
            onChange={() => setPaymentMethod("COD")}
          />
          Cash On Delivery
        </label>

        {paymentMethod === "UPI" && (
          <input
            type="text"
            placeholder="Enter UPI ID"
          />
        )}

        {paymentMethod === "Card" && (
          <>
            <input
              type="text"
              placeholder="Card Number"
            />

            <input
              type="text"
              placeholder="Card Holder Name"
            />

            <input
              type="text"
              placeholder="MM/YY"
            />

            <input
              type="password"
              placeholder="CVV"
            />
          </>
        )}

        {paymentMethod === "COD" && (
          <p>
            Pay when your order arrives.
          </p>
        )}

        <button
          className="place-order-btn"
          onClick={placeOrder}
        >
          Place Order
        </button>

      </div>

    </div>
  );
}

export default Checkout;