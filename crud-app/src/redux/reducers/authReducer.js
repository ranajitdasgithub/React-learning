const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN_REQUEST':
    case 'AUTH_REGISTER_REQUEST':
      return { ...state, loading: true };
    case 'AUTH_LOGIN_SUCCESS':
    case 'AUTH_REGISTER_SUCCESS':
      return { ...state, loading: false, userInfo: action.payload };
    case 'AUTH_LOGIN_FAIL':
    case 'AUTH_REGISTER_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'AUTH_LOGOUT':
      return { ...state, userInfo: null };
    default:
      return state;
  }
};
