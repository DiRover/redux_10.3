import { nanoid } from 'nanoid';
import {ADD_SERVICE} from '../actions/actionTypes';
import randomAvatar from "../service/randomAvatar";
import randomVehicle from "../service/randomVehicle";


const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000, discount: 15, picture: randomAvatar(), priceWIthDisc: 17850, vehicle: randomVehicle()},
  {id: nanoid(), name: 'Замена дисплея', price: 25000, discount: 20, picture: randomAvatar(), priceWIthDisc: 20000, vehicle: randomVehicle()},
];

export default function serviceListReducer(state = initialState, action) {
  console.log(action.type)
  if (action.type === ADD_SERVICE) {
    const {name, price, discount} = action.payload;
    let priceWithDisc;
    if (discount) {
      priceWithDisc = price * (100 - discount)/100;
    } else {
      priceWithDisc = ''
    }
    console.log(name, price, discount)
    return [...state, {id: nanoid(), name, price: Number(price), discount: discount, picture: randomAvatar(), priceWIthDisc: priceWithDisc, vehicle: randomVehicle()}];
  } else {
    return state;
  }
}
