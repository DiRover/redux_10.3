import { Link } from 'react-router-dom';
import React from "react";
//компонент меню со ссылками навигации
export default function Menu(): JSX.Element {
    return (
        <React.Fragment>
            <div className="menu">
                <Link to='/add'><button type="button" className="btn-menu btn btn-outline-secondary">Add Vehicles</button></Link>
                <Link to='/list'><button type="button" className="btn-menu btn btn-outline-secondary">Vehicles list</button></Link>
            </div>
        </React.Fragment>
    );

}