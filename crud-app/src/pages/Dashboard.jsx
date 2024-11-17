import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from '../actions/productActions';
import { Link } from 'react-router-dom';

const ProductDashboard = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(productId));
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Product Dashboard</h2>

      {authState.userInfo && (
        <div className="product-actions">
          <Link to="/upload">
            <button className="btn btn-primary">Add New Product</button>
          </Link>
        </div>
      )}

      {productState.loading && <p>Loading products...</p>}
      {productState.error && <p>{productState.error}</p>}

      <div className="product-list">
        {productState.products &&
          productState.products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>

              <div className="product-actions">
                {authState.userInfo && (
                  <>
                    <Link to={`/edit/${product._id}`}>
                      <button className="btn btn-warning">Edit</button>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductDashboard;
