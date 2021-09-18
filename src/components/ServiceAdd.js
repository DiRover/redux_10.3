import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService} from '../actions/actionCreators';
import randomAvatar from "../service/randomAvatar";
import {Link} from "react-router-dom";

function ServiceAdd() {
	const service = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		console.log(name, value)
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
			const avatar = randomAvatar();
			dispatch(addService(service.name, service.price, service.discount));
	}

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit} className="input-group mb-3">
				<input name='name' onChange={handleChange} value={service.name} type="text" className="form-control" placeholder="Name of item" aria-label="Recipient's username" aria-describedby="button-addon2"/>
				<input name='price' onChange={handleChange} value={service.price} className="form-control" placeholder="Price of item" aria-label="Recipient's username" aria-describedby="button-addon2"/>
				<input name='discount' onChange={handleChange} value={service.discount} className="form-control" placeholder="Discount" aria-label="Recipient's username" aria-describedby="button-addon2"/>
				<Link to='/list'><button onClick={handleSubmit} type='submit' className="btn btn-outline-secondary" id="button-addon2">Save</button></Link>
			</form>
			<Link to='/'><button type='button' className="btn btn-outline-secondary">Back to start page</button></Link>
			<Link to='/list'><button type='button' className="btn-list btn btn-outline-secondary">Vehicles list</button></Link>
		</React.Fragment>
	);
}

export default ServiceAdd;
