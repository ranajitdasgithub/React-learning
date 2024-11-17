import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProduct } from '../actions/productActions';

const ProductUpload = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const productState = useSelector((state) => state.product);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!authState.userInfo) {
      alert('You must be logged in to upload products.');
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);

    dispatch(uploadProduct(formData));
  };

  return (
    <div className="product-upload">
      <h2>Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Product Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>

      {productState.loading && <p>Uploading...</p>}
      {productState.product && <p>Upload Successful!</p>}
      {productState.error && <p>Error: {productState.error}</p>}
    </div>
  );
};

export default ProductUpload;
