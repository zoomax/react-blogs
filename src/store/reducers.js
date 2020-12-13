import { combineReducers } from "redux";
const blogReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "CREATE_BLOG":
      return { ...state , payload };
    default:
      return { ...state };
  }
};

export default combineReducers({blogReducer});
