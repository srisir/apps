import axios from "axios";

// Load User...........................
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "load_user_request" });
    const { data } = await axios.get(`/api/v1/me`);
    dispatch({ type: "load_user_success", payload: data.user });
  } catch (error) {
    dispatch({ type: "load_user_fail", payload: error.response.data.message });
  }
};

// Register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "signup_request" });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(`/api/v1/register`, userData, config);
    dispatch({ type: "signup_success", payload: data.user });
  } catch (error) {
    dispatch({ type: "signup_fail", payload: error.response.data.message });
  }
};

//user verify.......................
export const verifyme = (x) => async (dispatch) => {
  try {
    dispatch({ type: "user_verify_request" });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(`/api/v1/verify`, { x }, config);
    dispatch({ type: "user_verify_success", payload: data.message });
  } catch (error) {
    dispatch({
      type: "user_verify_fail",
      payload: error.response.data.message,
    });
  }
};

//login user..........................
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "login_request" });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/api/v1/login`,
      { email, password },
      config
    );
    dispatch({ type: "login_success", payload: data.user });
  } catch (error) {
    dispatch({ type: "login_fail", payload: error.response.data.message });
  }
};
//logout user..........................
export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logout_request" });
    const { data } = await axios.get(`/api/v1/logout`);
    dispatch({ type: "logout_success", payload: data.message });
  } catch (error) {
    dispatch({ type: "logout_fail", payload: error.response.data.message });
  }
};

export const all_users = () => async (dispatch) => {
  try {
    dispatch({ type: "users_request" });
    const { data } = await axios.get(`/api/v1/users`);
    dispatch({ type: "users_success", payload: data.users });
  } catch (error) {
    dispatch({ type: "users_fail", payload: error.response.data.message });
  }
};

export const clearErrors = (dispatch) => {
  dispatch({ type: "clear_error" });
};
export const clearMessage = (dispatch) => {
  dispatch({ type: "clear_message" });
};
