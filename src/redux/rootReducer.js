import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import ratingsReducer from "./ratings/ratingsReducer.js";

const rootReducer = combineReducers({
  ratings: ratingsReducer,
  toastr: toastrReducer
});

export default rootReducer;
