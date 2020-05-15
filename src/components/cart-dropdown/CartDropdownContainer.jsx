import { connect } from "react-redux"
import { compose } from 'redux'
import { selectCartItems } from "../../redux/cart/cartSelectors"
import { createStructuredSelector } from 'reselect'
import cartDropdown from "./cartDropdown"

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

const CartDropdownContainer = connect(mapStateToProps)(cartDropdown)

export default CartDropdownContainer