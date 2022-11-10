import { createReducer } from "@reduxjs/toolkit";
const intialstate = {
  projects: [],
  project: {},
};

export const projectReducer = createReducer(intialstate, {
  products_request: (state) => {
    state.loading = true;
    state.error = null;
    state.message = null;
  },
  products_success: (state, action) => {
    state.loading = false;
    state.error = null;
    state.projects = action.payload;
  },
  products_fail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.message = null;
    state.projects = null;
  },

  //new Project create.................
  new_project_request: (state) => {
    state.loading = true;
    state.error = null;
    state.message = null;
  },
  new_project_success: (state, action) => {
    state.loading = false;
    state.error = null;
    state.project = action.payload;
  },
  new_project_fail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.message = null;
    state.projects = null;
  },

  //new Project create.................
  project_details_request: (state) => {
    state.loading = true;
    state.error = null;
    state.message = null;
  },
  project_details_success: (state, action) => {
    state.loading = false;
    state.error = null;
    state.project = action.payload;
  },
  project_details_fail: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.message = null;
    state.project = null;
  },

  clear_error: (state) => {
    state.error = null;
  },
});
