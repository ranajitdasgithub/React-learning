import { products } from "../seeder/productSeeder";
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_COMMENT = "ADD_COMMENT";

export const register = (userData) => ({
  type: REGISTER,
  payload: userData,
});

export const login = (userData) => ({
  type: LOGIN,
  payload: userData,
});

export const fetchProducts = () => {
  const productsData = products;
  return {
    type: FETCH_PRODUCTS,
    payload: productsData,
  };
};

export const addComment = (productId, comment) => ({
  type: ADD_COMMENT,
  payload: { productId, comment },
});
