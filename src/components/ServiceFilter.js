import React from "react";
import {filterService} from "../actions/actionCreators";
import {useDispatch, useSelector} from "react-redux";

function ServiceFilter() {
    const service = useSelector(state => state.serviceFilter);
    const dispatch = useDispatch();

    const handleFilter = evt => {
        const {value} = evt.target;
        dispatch(filterService(value));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleFilter} value={service.name} />
        </form>
    );
}

export default ServiceFilter;