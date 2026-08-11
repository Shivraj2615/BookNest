import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import OrderItem from "./OrderItem";
import "./OrdersPage.css";

export default function OrdersPage() {
  const { orders, loading } = useContext(OrderContext);

  if (loading) {
    return <p className="orders-message">Loading...</p>;
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="orders-empty">
        <h3>No orders placed yet</h3>
        <p>Your placed orders will appear here.</p>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h2 className="orders-title">My Orders</h2>

      <div className="orders-list">
        {orders.map((order) => (
          <OrderItem key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
}
