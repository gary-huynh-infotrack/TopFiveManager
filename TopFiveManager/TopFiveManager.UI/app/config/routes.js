import React from 'react'
import Main from '../components/layouts/Main';
import Blank from '../components/layouts/Blank';

import DashboardView from '../views/Dashboard';
import TopFiveView from '../views/TopFive';
import TreeView from '../views/TreeView'
import AddTopFiveView from '../views/AddTopFive';

import { Route, Router, IndexRedirect, browserHistory} from 'react-router';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRedirect to="/dashboard" />
            <Route path="dashboard" component={DashboardView}> </Route>
            <Route path="topfives" component={TopFiveView}> </Route>
             <Route path="treeview" component={TreeView}> </Route>
        </Route>
    </Router>

);