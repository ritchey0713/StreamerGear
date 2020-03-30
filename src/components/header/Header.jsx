import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { auth } from "../../firebase/firebase"
import { createStructuredSelector } from 'reselect'
import { connect } from "react-redux"
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/cartDropdown'
import { selectCartHidden } from "../../redux/cart/cartSelectors"
import { selectCurrentUser } from "../../redux/user/userSelectors"


const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      
      <Link to="/shop" className="option">
        SHOP
      </Link>

      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}> Sign out </div>
        :
        <Link className="option" to="/signin">SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {
     !hidden && <CartDropDown />

    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)