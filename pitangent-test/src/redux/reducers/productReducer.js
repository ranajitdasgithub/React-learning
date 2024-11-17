// src/reducers/productReducer.js

import { FETCH_PRODUCTS, ADD_COMMENT } from '../actions';

const initialProductState = {
  products: [],
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_COMMENT:
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            comments: [...product.comments, action.payload.comment],
          };
        }
        return product;
      });
      return { ...state, products: updatedProducts };
    default:
      return state;
  }
};

export default productReducer;
