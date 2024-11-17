import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_LOGIN_REQUEST' });

    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const { data } = await axios.post('/api/auth/login', { email, password }, config);

    dispatch({ type: 'AUTH_LOGIN_SUCCESS', payload: data });

    // Save token to localStorage
    localStorage.setItem('authToken', JSON.stringify(data.token));
  } catch (error) {
    dispatch({
      type: 'AUTH_LOGIN_FAIL',
      payload: error.response?.data.message || error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'AUTH_REGISTER_REQUEST' });

    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    const { data } = await axios.post('/api/auth/register', { name, email, password }, config);

    dispatch({ type: 'AUTH_REGISTER_SUCCESS', payload: data });
  } catch (error) {
    dispatch({
      type: 'AUTH_REGISTER_FAIL',
      payload: error.response?.data.message || error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('authToken');
  dispatch({ type: 'AUTH_LOGOUT' });
};
