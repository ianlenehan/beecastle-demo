import { toastr } from "react-redux-toastr";
// import * as types from "../types";

export const createRating = () => {
  return async (dispatch, getState) => {
    try {
    } catch (error) {
      toastr.error("Error fetching brochures", error);
    }
  };
};
