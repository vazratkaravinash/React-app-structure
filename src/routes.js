import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './routes/login/index'
import Dashboard from './routes/dashboard/index'
import Registration from "./routes/register/index";
import AdminDashboard from "./routes/AdminDashboard/index";

const Routes = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    let appSection
    if(!user) {
        appSection = (
            <Fragment>
                <Switch>
                    <Route exact strict path="/register" component={Registration} />
                    <Route exact strict path="/" component={Login} />
                </Switch>
            </Fragment>
        )
    }
    else if(user.user_role ==='Admin') {
        appSection = (
            <Fragment>
                <Switch>
                    <Route exact strict path="/admin/dashboard" component={AdminDashboard} />
                    <Route exact strict path="/register" component={Registration} />
                    <Route exact strict path="/" component={Login} />
                </Switch>
            </Fragment>
        )
    }
    else {
        appSection = (
            <Fragment>
                <Switch>
                    <Route exact strict path="/dashboard" component={Dashboard} />
                    <Route exact strict path="/register" component={Registration} />
                    <Route exact strict path="/" component={Login} />
                </Switch>
            </Fragment>
        )
    }
    

    return (
        <Router>
            <main id="main" style={{ marginBottom: '80px' }}>
                {appSection}
            </main>
        </Router>
    )
}

export default Routes;
