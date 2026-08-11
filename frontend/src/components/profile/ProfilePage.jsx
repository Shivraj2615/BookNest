import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./ProfilePage.css";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p className="profile-loading">Loading user profile...</p>;
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <h2>User Profile</h2>
          <span className="profile-role">{user.role}</span>
        </div>

        <div className="profile-info">
          <div className="profile-info-row">
            <span className="profile-label">Name</span>
            <span className="profile-value">{user.name}</span>
          </div>

          <div className="profile-info-row">
            <span className="profile-label">Email</span>
            <span className="profile-value">{user.email}</span>
          </div>

          <div className="profile-info-row">
            <span className="profile-label">Cart Items</span>
            <span className="profile-value">{user.cart?.length || 0}</span>
          </div>

          <div className="profile-info-row">
            <span className="profile-label">Wishlist Items</span>
            <span className="profile-value">{user.wishlist?.length || 0}</span>
          </div>

          <div className="profile-info-row">
            <span className="profile-label">Member Since</span>
            <span className="profile-value">
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        <button className="edit-profile-btn">Edit Profile</button>
      </div>
    </div>
  );
}
