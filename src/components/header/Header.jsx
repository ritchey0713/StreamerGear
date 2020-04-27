import React from 'react'
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { auth } from "../../firebase/firebase"
import { createStructuredSelector } from 'reselect'
import { connect } from "react-redux"
import CartIcon from '../cart-icon/cart-icon'
import CartDropDown from '../cart-dropdown/cartDropdown'
import { selectCartHidden } from "../../redux/cart/cartSelectors"
import { selectCurrentUser } from "../../redux/user/userSelectors"

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from "./header.styles"


const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      
      <OptionLink to="/shop" >
        SHOP
      </OptionLink>

      <OptionLink to="/contact" >
        CONTACT
      </OptionLink>
      {
        currentUser ? 
        <OptionDiv  onClick={() => auth.signOut()}> Sign out </OptionDiv>
        :
        <OptionLink to="/signin">SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
     !hidden && <CartDropDown />

    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)