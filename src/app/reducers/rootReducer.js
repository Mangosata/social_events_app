import { combineReducers } from "redux";
import { default as testReducer } from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";

const rootReducer = combineReducers({
  test: testReducer,
  events: eventReducer,
});

export default rootReducer;
