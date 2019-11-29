import { combineReducers } from "redux";

const initialState = {
  counter: 0,
  isChecked: false,
  isChecking: false,
  dataArray: [],
  length: 0,
  fn: '',
  ln: '',
  place: '',
  showData: [],
  userAPIData: [],
}
const countereducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: action.payload.counter };
    case 'checkbox':
      return { ...state, isChecked: action.payload.isChecked };
    case 'myarray':
      return { ...state, dataArray: action.payload.dataArray };
    case 'checkingbox':
      return { ...state, isChecking: action.payload.isChecking };
    case 'myArray':
      console.warn("reducer", action.payload.showData);
      return { ...state, showData: action.payload.showData };
    case 'APIHit':
        return { ...state, userAPIData: action.payload.userAPIData };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  countereducer: countereducer
});