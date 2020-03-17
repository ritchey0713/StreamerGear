import React from 'react';
import HomePage from './pages/homepage';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
