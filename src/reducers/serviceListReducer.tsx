import { nanoid } from 'nanoid';
import {ADD_SERVICE} from '../actions/actionTypes';
import randomAvatar from "../service/randomAvatar";
import randomVehicle from "../service/randomVehicle";
import { ItemList, StateTypeItem } from '../types';
//редьюсер отображения списка



const initialState: Array<StateTypeItem> = [
  {id: nanoid(), name: 'Замена стекла', price: 21000, discount: 15, picture: randomAvatar(), priceWIthDisc: 17850, vehicle: randomVehicle()},
  {id: nanoid(), name: 'Замена дисплея', price: 25000, discount: 20, picture: randomAvatar(), priceWIthDisc: 20000, vehicle: randomVehicle()},
];

export default function serviceListReducer(state: Array<StateTypeItem> = initialState, action: ItemList) {
  if (action.type === ADD_SERVICE) {//реакция на добавление
    const {name, price, discount} = action.payload;
    let priceWithDisc: number | string;
    if (discount) {
      priceWithDisc = price * (100 - discount)/100;
    } else {
      priceWithDisc = ''
    }
    console.log(state);
    return [...state, {id: nanoid(), name, price: Number(price), discount: discount, picture: randomAvatar(), priceWIthDisc: priceWithDisc, vehicle: name}];
  } else {
    return state;
  }
}
