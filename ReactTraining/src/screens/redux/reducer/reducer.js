import { combineReducers } from "redux";

const initialState = {
  counter: 0,
  isChecked: false,
  isChecking: false,
  dataArray: [],
  length: 0
}
const countereducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: action.payload.counter };
    case 'checkbox':
      return { ...state, isChecked: action.payload.isChecked };
    case 'myarray':
      return { ...state, dataArray: action.payload.dataArray, length: action.payload.dataArray.length };
    case 'checkingbox':
      return { ...state, isChecking: action.payload.isChecking };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  countereducer: countereducer
});