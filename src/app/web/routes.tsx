import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from '../Components/counter/Counter';
import Home from "../Components/home";
import About from "../Components/about";
import Calculator from '../Components/Calculator/Calculator';

const routes = () => <Switch>
    <Route path='*/pages/counter' component={Counter} />
    <Route path='*/pages/about' component={About} />
    <Route path='*/pages/apps' component={Calculator} />
    <Route path='/' component={Home} />
</Switch>

export default routes
