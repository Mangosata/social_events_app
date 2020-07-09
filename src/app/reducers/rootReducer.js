import { combineReducers } from "redux";
import { default as testReducer } from "../../features/testarea/testReducer";

const rootReducer = combineReducers({
  test: testReducer,
});

export default rootReducer;
