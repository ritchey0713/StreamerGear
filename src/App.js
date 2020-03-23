import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage';
import ShopPage from "./pages/shop/shop" 
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header"
import SignInLogIn from "./pages/signin-login/SignInLogIn"
import { auth, createUserProfileDocument } from "./firebase/firebase"

class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => (
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        ))
      }
      // set user to null when sign out
      this.setState({ currentUser: userAuth })
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
