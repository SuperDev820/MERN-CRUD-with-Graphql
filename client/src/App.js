import React from "react";
import { Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import List from './components/List';
import Edit from "./components/Edit";
import Create from "./components/Create";
import Show from "./components/Show";

function App() {
    return (
        <Switch>
            <Route exact path="/" component={List} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/create" component={Create} />
            <Route path="/show/:id" component={Show} />
        </Switch>
    );
}

export default App;
