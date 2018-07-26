import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Contact from './contact';
import Projects from './projects';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;
