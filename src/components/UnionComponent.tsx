import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ServiceList from "./ServiceList";
import ServiceAdd from "./ServiceAdd";
import Menu from "./Menu";
//объединенный компонент с роутами
export default function UnionComponent(): JSX.Element {

    return (
        <Router>
            <main className="main-container">
                <Switch>
                    <Route path="/add" exact component={ServiceAdd} />
                    <Route path="/list" exact component={ServiceList} />
                    <Route path="/" exact component={Menu} />
                </Switch>
            </main>
        </Router>
    )
}