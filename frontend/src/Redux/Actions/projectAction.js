import axios from "axios";

// All Projects...........................
export const craeteProjects = (p_data) => async (dispatch) => {
  try {
    dispatch({ type: "new_project_request" });
    const config = { headers: { "Content-Type": "application/json" } };
    // const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(`/api/v1/admin/new`, p_data, config);
    dispatch({ type: "new_project_success", payload: data });
  } catch (error) {
    dispatch({
      type: "new_project_fail",
      payload: error.response.data.message,
    });
  }
};

// All Projects...........................
export const all_projects = () => async (dispatch) => {
  try {
    dispatch({ type: "products_request" });
    const { data } = await axios.get(`/api/v1/projects`);
    dispatch({ type: "products_success", payload: data.projects });
  } catch (error) {
    dispatch({ type: "products_fail", payload: error.response.data.message });
  }
};

// All Projects...........................
export const projectsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "project_details_request" });
    const { data } = await axios.get(`/api/v1/project/${id}`);
    dispatch({ type: "project_details_success", payload: data.project });
  } catch (error) {
    dispatch({
      type: "project_details_fail",
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch("clear_error");
};
