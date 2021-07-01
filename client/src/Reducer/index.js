import { SEARCH_BY_NAME } from '../Actions/index';
import { GET_DETAILS } from '../Actions/index';
import { GET_DIETS } from '../Actions/index';
const initialState = {
  searched: [],
  detail: [],
  diets: [],
};
function rootReducer(state = initialState, action) {
  if (action.type === SEARCH_BY_NAME) {
    return { ...state, searched: action.payload };
  }
  if (action.type === GET_DETAILS) {
    return { ...state, detail: action.payload };
  }
  if (action.type === GET_DIETS) {
    return { ...state, diets: action.payload };
  }
  return state;
}
export default rootReducer;
