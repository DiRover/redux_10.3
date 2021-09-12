import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editExistService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();
  const [state, setState] = useState(true);
  useEffect(() => {
    setState(() => {
      return  true;
    });
  },[items])

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = (id, name, price) => {
    setState(() => {
      return  false;
    });
    dispatch(editExistService(id, name, price))
  }

  return (
    <ul>
      {items.map(service => (
        <li key={service.id}>
          {service.name} {service.price}
          <button onClick={() => handleEdit(service.id, service.name, service.price)}>Edit</button>
          {state ? <button onClick={() => handleRemove(service.id)}>✕</button> : <></>}
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
