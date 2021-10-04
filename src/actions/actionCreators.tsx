import { ADD_SERVICE, CHANGE_SERVICE_FIELD } from './actionTypes';
import {ItemList} from '../types';



export function addService(name: string, price: number, discount?: number): ItemList {//экшен добавления сервиса
  return {type: ADD_SERVICE, payload: {name, price, discount}};
}

export function changeServiceField(name: string, value: string  | number) {//экшен изменения поля ввода
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}//price нельзя поставить т.к. значение даёт input, а там по умолчанию два поля name и value
}
