const initialState = {
    loading: false,
    products: [],
    product: null,
    error: null,
  };
  
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PRODUCT_LIST_REQUEST':
      case 'PRODUCT_DELETE_REQUEST':
        return { ...state, loading: true };
      case 'PRODUCT_LIST_SUCCESS':
        return { ...state, loading: false, products: action.payload };
      case 'PRODUCT_DELETE_SUCCESS':
        return {
          ...state,
          loading: false,
          products: state.products.filter(
            (product) => product._id !== action.payload._id
          ),
        };
      case 'PRODUCT_LIST_FAIL':
      case 'PRODUCT_DELETE_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  