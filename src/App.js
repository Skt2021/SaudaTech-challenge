import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './containers/Home/Home';
import Task2 from './containers/Task2/Task2';
import Task6 from './containers/Task6/Task6';

function App() {

  return (
    <BrowserRouter >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/task2" component={Task2} />
          <Route path="/task6" component={Task6} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
