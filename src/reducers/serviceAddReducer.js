import { CHANGE_SERVICE_FIELD, ADD_SERVICE, EDIT_EXIST_SERVICE, SAVE_SERVICE, CANCEL } from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  if (action.type === CHANGE_SERVICE_FIELD) {
    const {name, value} = action.payload;
    return {...state, [name]: value};
  } else if (action.type === ADD_SERVICE) {
    return {...initialState};//очищение поля ввода, нужно вернуть новый объект, т.к. редюсер чистая функция
  }else if (action.type === EDIT_EXIST_SERVICE || action.type === SAVE_SERVICE) {
    let {id, name, price} = action.payload;
    if (isNaN(price)) price = 0;//если ввели стоимость буквами
    return {...state, name: name, price: price, id: id};
  } else if (action.type === CANCEL) {
    return {...initialState}
  } else {
    return state;
  }
}
