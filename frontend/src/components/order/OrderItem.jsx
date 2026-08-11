import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import "./OrderItem.css";

export default function OrderItem({ order }) {
  const { cancelOrder } = useContext(OrderContext);

  const canCancel = order.orderStatus === "placed";

  const date = new Date(order.createdAt);

  const orderDate = date.toLocaleDateString();
  const orderTime = date.toLocaleTimeString();

  return (
    <div className="order-card">
      {/* Order information */}
      <div className="order-header">
        <h4>Order #{order._id.slice(-6).toUpperCase()}</h4>

        <div className="order-meta">
          <p>
            <strong>Status:</strong>{" "}
            <span className={`status ${order.orderStatus}`}>
              {order.orderStatus}
            </span>
          </p>

          <p>
            <strong>Payment:</strong> {order.paymentStatus}
          </p>

          <p>
            <strong>Total:</strong> ₹{order.totalAmount}
          </p>

          <p>
            <strong>Date:</strong> {orderDate}
          </p>

          <p>
            <strong>Time:</strong> {orderTime}
          </p>
        </div>
      </div>

      <hr />

      {/* Ordered books */}
      <div className="order-books">
        {order.items.map((item) => (
          <div key={item.bookId?._id || item._id} className="order-book">
            <img
              src={item.image || "/placeholder-book.png"}
              alt={item.title}
              className="order-book-image"
            />

            <div className="order-book-details">
              <p className="order-book-title">{item.title}</p>

              <p className="order-book-price">
                ₹{item.price} × {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cancel */}
      {canCancel && (
        <button className="cancel-btn" onClick={() => cancelOrder(order._id)}>
          Cancel Order
        </button>
      )}
    </div>
  );
}
