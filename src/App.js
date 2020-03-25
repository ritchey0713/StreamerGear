import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage';
import ShopPage from "./pages/shop/shop" 
import { Switch, Route } from 'react-router-dom';
import Header from "./components/header/Header"
import SignInLogIn from "./pages/signin-login/SignInLogIn"
import { auth, createUserProfileDocument } from "./firebase/firebase"
import { connect } from 'react-redux'
import { setCurrentUser } from "./redux/user/userActions"

class App extends Component {

  componentDidMount(){
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => (
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        ))
      }
      // set user to null when sign out
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
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
}



export default connect(undefined,
  {
    setCurrentUser
  })(App);
