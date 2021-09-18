import { ADD_SERVICE, CHANGE_SERVICE_FIELD } from './actionTypes';

export function addService(name, price, discount) {
  return {type: ADD_SERVICE, payload: {name, price, discount}};
}

export function changeServiceField(name, value, discount) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value, discount}}//price нельзя поставить т.к. значение даёт input, а там по умолчанию два поля name и value
}
