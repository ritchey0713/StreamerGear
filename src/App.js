import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage';
import ShopPage from "./pages/shop/shop" 
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header"
import SignInLogIn from "./pages/signin-login/SignInLogIn"
import { auth } from "./firebase/firebase"

class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInLogIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
