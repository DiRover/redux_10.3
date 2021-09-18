import { CHANGE_SERVICE_FIELD, ADD_SERVICE } from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  discount: '',
};

export default function serviceAddReducer(state = initialState, action) {
  if (action.type === CHANGE_SERVICE_FIELD) {
    const {name, value} = action.payload;
    return {...state, [name]: value};
  } else if (action.type === ADD_SERVICE) {
    return {...initialState};//очищение поля ввода, нужно вернуть новый объект, т.к. редюсер чистая функция
  } else {
    return state;
  }
}
