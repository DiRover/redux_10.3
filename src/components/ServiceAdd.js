import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, cancel} from '../actions/actionCreators';
import randomAvatar from "../service/randomAvatar";

function ServiceAdd() {
	const service = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value, discount} = evt.target;
		dispatch(changeServiceField(name, value, discount));
	}

	const handleSubmit = evt => {
			evt.preventDefault();
			const avatar = randomAvatar();
			dispatch(addService(service.name, service.price, service.id, service.discount, avatar));
	}
	const handleCancel = () => {
		dispatch(cancel());
	};

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={service.name} />
			<input name='price' onChange={handleChange} value={service.price} />
			<input name='discount' onChange={handleChange} value={service.discount}/>
			<>{service.id ? <><button type='submit'>Save</button><button onClick={handleCancel}>Cancel</button></> : <button type='submit'>Save</button>}</>
		</form>
	);
}

export default ServiceAdd;
