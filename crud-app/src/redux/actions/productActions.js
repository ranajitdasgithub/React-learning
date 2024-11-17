import axios from 'axios';

// Get Products
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_LIST_REQUEST' });

    const { data } = await axios.get('/api/products');

    dispatch({ type: 'PRODUCT_LIST_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_LIST_FAIL',
      payload: error.response?.data.message || error.message,
    });
  }
};

// Delete Product
export const deleteProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_DELETE_REQUEST' });

    const { data } = await axios.delete(`/api/products/${productId}`);

    dispatch({ type: 'PRODUCT_DELETE_SUCCESS', payload: data });
    alert('Product deleted successfully');
  } catch (error) {
    dispatch({
      type: 'PRODUCT_DELETE_FAIL',
      payload: error.response?.data.message || error.message,
    });
    alert('Error deleting product');
  }
};
