import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducer } from "../../app/common/util/reducerUtils";

const initialState = {
  data: 42,
};

const incrementCOunter = (state) => {
  return { ...state, data: state.data + 1 };
};

const decrementCOunter = (state) => {
  return { ...state, data: state.data - 1 };
};

// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return { ...state, data: state.data + 1 };
//     case DECREMENT_COUNTER:
//       return { ...state, data: state.data - 1 };
//     default:
//         return state;
//   }
// };

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCOunter,
  [DECREMENT_COUNTER]: decrementCOunter,
});
