// src/reducers/authReducer.js

import { REGISTER, LOGIN } from '../actions';

const initialAuthState = {
  user: null,
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case REGISTER:
    case LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default authReducer;
