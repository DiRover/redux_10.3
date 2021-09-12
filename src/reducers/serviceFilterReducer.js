import {FILTER_SERVICE} from '../actions/actionTypes';

const initialState = {
  name: '',
};

export default function serviceFilterReducer(state = initialState, action) {
  if (action.type === FILTER_SERVICE) {
    const {value} = action.payload;
    return {...state, name: value}
  } else {
    return state;
  }
}
