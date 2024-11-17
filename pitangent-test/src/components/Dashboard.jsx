// src/components/Dashboard.js
import "../styles/dashboard.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addComment } from "../redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const user = { username: "Ranajit" }; //useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddComment = (productId, comment) => {
    dispatch(addComment(productId, comment));
  };

  if (!user) {
    return <div>Please log in to see the dashboard.</div>;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.username}</h1>
      <h2>Dashboard</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <div>
              {product.comments?.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
              <button
                onClick={() =>
                  handleAddComment(product.id, prompt("Add a comment:"))
                }
              >
                Add Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
