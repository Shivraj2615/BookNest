import { useContext } from "react";
import "./AdminOrdersPage.css";
import { OrderContext } from "../../context/OrderContext";

export default function AdminOrdersPage() {
  const { orders, loading, updateOrder } = useContext(OrderContext);

  if (loading) {
    return <h3 className="loading">Loading...</h3>;
  }

  if (!orders || orders.length === 0) {
    return <h3 className="no-orders">No Orders Placed</h3>;
  }

  return (
    <div className="admin-orders-container">
      <h3 className="page-title">Admin Orders</h3>

      <div className="orders-table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Books</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Action</th>
              <th>Created At</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="order-row">
                <td data-label="Order ID" className="order-id">
                  <span className="desktop-order-id">{order._id}</span>

                  <span className="mobile-order-id">
                    #{order._id.slice(-6).toUpperCase()}
                  </span>
                </td>

                <td data-label="User" className="order-user">
                  <strong>{order.user.name}</strong>
                  <span>{order.user.email}</span>
                </td>

                <td data-label="Books" className="order-books">
                  {order.items.map((item) => (
                    <div key={item._id} className="book-item">
                      <img
                        src={item.image || "/placeholder-book.png"}
                        alt={item.title}
                        className="book-img"
                      />

                      <span className="book-title">
                        {item.title} ({item.quantity})
                      </span>
                    </div>
                  ))}
                </td>

                <td data-label="Total Amount" className="order-total">
                  ₹{order.totalAmount}
                </td>

                <td
                  data-label="Status"
                  className={`order-status ${order.orderStatus}`}
                >
                  {order.orderStatus}
                </td>

                <td data-label="Action" className="order-action">
                  <select
                    className="status-select"
                    value={order.orderStatus}
                    disabled={
                      order.orderStatus === "delivered" ||
                      order.orderStatus === "cancelled"
                    }
                    onChange={(e) => updateOrder(order._id, e.target.value)}
                  >
                    <option value="placed">placed</option>
                    <option value="shipped">shipped</option>
                    <option value="delivered">delivered</option>
                    <option value="cancelled">cancelled</option>
                  </select>
                </td>

                <td data-label="Created At" className="order-created">
                  {new Date(order.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
