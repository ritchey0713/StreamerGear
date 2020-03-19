import React from 'react';
import HomePage from './pages/homepage/homepage';
import ShopPage from "./pages/shop/shop" 
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header"
import SignInLogIn from "./pages/signin-login/SignInLogIn"

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInLogIn} />
      </Switch>
    </div>
  );
}

export default App;
