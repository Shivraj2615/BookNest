import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { updateCartItem, removeCartItem } = useContext(CartContext);

  const handleIncrease = () => {
    updateCartItem(item.book._id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateCartItem(item.book._id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeCartItem(item.book._id);
  };

  return (
    <div className="cart-item">
      {/* Book information */}
      <Link to={`/books/${item.book._id}`} className="cart-item-book">
        <img
          src={item.book.image}
          alt={item.book.title}
          className="cart-item-img"
        />

        <div className="cart-item-info">
          <h3 className="cart-item-title">{item.book.title}</h3>

          <p className="cart-item-price">₹ {item.book.price}</p>
        </div>
      </Link>

      {/* Controls */}
      <div className="cart-item-controls">
        <div className="quantity-controls">
          <button
            className="qty-btn"
            onClick={handleDecrease}
            disabled={item.quantity <= 1}
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span className="qty">{item.quantity}</span>

          <button
            className="qty-btn"
            onClick={handleIncrease}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button className="remove-btn" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}
