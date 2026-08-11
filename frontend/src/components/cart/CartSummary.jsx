import { useNavigate } from "react-router-dom";
import "./CartSummary.css";

export default function CartSummary({ cart }) {
  const navigate = useNavigate();

  if (!cart || cart.length === 0) return null;

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0,
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-summary">
      <h3 className="cart-summary-title">Order Summary</h3>

      <div className="cart-summary-row">
        <span>Items</span>
        <span>{totalItems}</span>
      </div>

      <div className="cart-summary-divider" />

      <div className="cart-summary-total">
        <span>Total</span>
        <span>₹{totalPrice}</span>
      </div>

      <button
        className="checkout-btn"
        onClick={() => navigate("/orders/checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
