import { createReducer } from "@reduxjs/toolkit";
const intialstate = {
  user: {},
  users: [],
};

export const userReducer = createReducer(intialstate, {
  signup_request: (state) => {
    state.loading = true;
    state.error = null;
    state.message = null;
    state.isAuthenticated = false;
  },
  signup_success: (state, action) => {
    state.loading = false;
    state.error = null;
    state.message = action.payload.message;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  signup_fail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.message = null;
    state.isAuthenticated = false;
    state.user = null;
  },

  //load user..........................
  load_user_request: (state) => {
    state.loading = true;
    state.error = null;
    state.message = null;
    state.isAuthenticated = false;
  },
  load_user_success: (state, action) => {
    state.loading = false;
    state.error = null;
    state.message = action.payload.message;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  load_user_fail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.message = null;
    state.isAuthenticated = false;
    state.user = null;
  },

  //user verify..........................
  user_verify_request: (state) => {
    state.loading = true;
    state.error = null;
    state.message = null;
    state.isAuthenticated = true;
  },
  user_verify_success: (state, action) => {
    state.loading = false;
    state.error = null;
    state.message = action.payload.message;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  user_verify_fail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.message = null;
  },

  //login user....................
  //logout user.......................
  login_request: (state) => {
    state.loading = true;
    state.error = null;
    state.message = null;
    state.isAuthenticated = false;
  },
  login_success: (state, action) => {
    state.loading = false;
    state.error = null;
    state.message = action.payload.message;
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  login_fail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.message = null;
  },

  //logout user.......................
  logout_request: (state) => {
    state.loading = true;
    state.error = null;
    state.message = null;
    state.isAuthenticated = false;
  },
  logout_success: (state, action) => {
    state.loading = false;
    state.error = null;
    state.message = action.payload;
    state.isAuthenticated = false;
    state.user = null;
  },
  logout_fail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.message = null;
  },

  //all users.......................
  users_request: (state) => {
    state.loading = true;
    state.error = null;
    state.message = null;
    state.isAuthenticated = true;
  },
  users_success: (state, action) => {
    state.loading = false;
    state.error = null;
    state.users = action.payload;
    state.isAuthenticated = true;
  },
  users_fail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.message = null;
  },

  //clear error..........................
  clear_error: (state) => {
    state.error = null;
  },

  //clear message.........................
  clear_message: (state) => {
    state.message = null;
  },
});
