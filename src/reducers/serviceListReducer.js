import { nanoid } from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE, CANCEL, FILTER_SERVICE} from '../actions/actionTypes';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

let currentState = [...initialState];

export default function serviceListReducer(state = initialState, action) {
  if (action.type === ADD_SERVICE) {
    const {name, price, id} = action.payload;
    if (id) {
      const newState = state.map((service) => {
        if (service.id === id) {
          service.name = name;
          service.price = Number(price);
        }
        return service;
      })
      currentState = [...newState];
      return  newState;
    } else {
      const newState = [...state, {id: nanoid(), name, price: Number(price)}];
      currentState = [...newState];
      return newState;
    }
  } else if (action.type === REMOVE_SERVICE) {
    const {id} = action.payload;
    currentState = state.filter(service => service.id !== id)
    return state.filter(service => service.id !== id);
  } else if (action.type === CANCEL) {
    currentState = [...state];
    return [...state];
  } else if (action.type === FILTER_SERVICE) {
    const {value} = action.payload;
    if (value === '') return [...currentState];
    const newState = currentState.filter((service) => {
    const str = service.name;
    if (str.toLowerCase().startsWith(value.toLowerCase())) {
      return service;
    } else {
      return false
    }
    });
    return newState;
  } else {
    return state;
  }
}
