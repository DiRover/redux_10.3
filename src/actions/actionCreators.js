import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_EXIST_SERVICE, SAVE_SERVICE, CANCEL, FILTER_SERVICE } from './actionTypes';

export function addService(name, price, id, avatar) {
  return {type: ADD_SERVICE, payload: {name, price, id, avatar}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value, discount) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value, discount}}//price нельзя поставить т.к. значение даёт input, а там по умолчанию два поля name и value
}

export function editExistService(id, name, price) {
  return {type: EDIT_EXIST_SERVICE, payload: {id, name, price}};
}

export  function  saveService(name, price, id) {
  return {type: SAVE_SERVICE, payload: {name, price, id}};
}

export  function cancel() {
  return {type: CANCEL}
}

export function filterService(value) {
  return {type: FILTER_SERVICE, payload: {value}};
}