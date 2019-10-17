import React from 'react';

//importando componentes em React
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Dashboard" component={Dashboard}/>
                <Route path="/New" component={New}/>
            </Switch>
        </BrowserRouter>
    );
}


