import { CHANGE_SERVICE_FIELD, ADD_SERVICE } from '../actions/actionTypes';
import {ItemList, StateTypeItem, Payload} from '../types';
//редбюсер добавления 
const initialState: Payload = {
  name: '',
  price: '',
  discount: '',
};

export default function serviceAddReducer(state: StateTypeItem | Payload = initialState, action: ItemList) {
  if (action.type === CHANGE_SERVICE_FIELD) {//рекакция на изменение поля
    const {name, value} = action.payload;
    return {...state, [name]: value};
  } else if (action.type === ADD_SERVICE) {//реакция на доьавление
    return {...initialState};//очищение поля ввода, нужно вернуть новый объект, т.к. редюсер чистая функция
  } else {
    return state;
  }
}
