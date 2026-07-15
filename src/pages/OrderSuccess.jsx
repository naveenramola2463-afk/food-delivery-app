import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  const orderId = Math.floor(Math.random() * 1000000);

  return (
    <div className="success-page">

      <div className="success-card">

        <h1>✅ Order Placed Successfully</h1>

        <h2>Thank You for Ordering!</h2>

        <p>Your Order ID</p>

        <h3>#{orderId}</h3>

        <p>Estimated Delivery Time</p>

        <h2>25-30 Minutes</h2>

        <button
          onClick={() => navigate("/")}
        >
          Back To Home
        </button>

      </div>

    </div>
  );
}

export default OrderSuccess;