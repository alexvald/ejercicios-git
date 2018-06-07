//dependencias 
import React from "react";
import {Route,Switch} from 'react-router-dom';
//componentes
import App from './components/App';
import Home from './components/Home';
import Contador from './components/Contador';
import Page404 from './components/Page404';
import Calculator from './components/Calculator';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/contador" component={Contador} />
      <Route exact path="/" component={Home} />
      <Route path="/Calculator" component={Calculator} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
