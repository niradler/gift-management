import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Shipping from './pages/Shipping';
import Admin from './pages/Admin';

const Routes = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/shipping' component={Shipping}/>
      <Route path='/admin' component={Admin}/>
    </Switch>
)

export default Routes;