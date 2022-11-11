import { configureStore } from "@reduxjs/toolkit";
import { projectReducer } from "./Redux/Reducers/projectReducer";
import { userReducer } from "./Redux/Reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
  },
});
export default store;

export const server = "https://srisir.herokuapp.com/api/v1";
