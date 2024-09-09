import React from 'react';
import Billing from './components/Billing';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/billing" component={Billing} />
            </Switch>
        </Router>
    );
}

export default App;
