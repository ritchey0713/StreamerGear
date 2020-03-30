import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage';
import ShopPage from "./pages/shop/shop" 
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from "./components/header/Header"
import SignInLogInPage from "./pages/signin-login/SignInLogIn"
import { auth, createUserProfileDocument } from "./firebase/firebase"
import { connect } from 'react-redux'
import { setCurrentUser } from "./redux/user/userActions"
import { selectCurrentUser } from "./redux/user/userSelectors"
// use if more than one prop is being set in mapstate to props, also no need to pass state to each one
import { createStructuredSelector } from 'reselect'
import CartCheckoutPage from './components/cart-checkout/cartCheckout';

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
          <Route path="/signin" render={() => 
            this.props.currentUser ? 
              (<Redirect to="/" />) : 
              <SignInLogInPage />
              } />
          <Route exact path="/checkout" component={CartCheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


export default connect(mapStateToProps,
  {
    setCurrentUser
  })(App);
