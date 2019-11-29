import { combineReducers } from "redux";

const initialState = {
  img: '',
}
const countereducer = (state = initialState, action) => {
  switch (action.type) {
    case "getPic":
      return { ...state, img: action.payload.img };
    default:
      return state;
  }
};

export const reducer = combineReducers({
  countereducer: countereducer
});