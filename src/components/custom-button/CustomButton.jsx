import React from "react"
import { CustomButtonContainer } from "./customButton.styles"

// const CustomButton = ({ children, isGoogleSignIn, itemPageButton, inverted, ...otherProps }) => (
//   <button className={`${inverted && 'inverted'} ${isGoogleSignIn && 'google-sign-in'} ${itemPageButton ? 'items-button custom-button' : 'custom-button'}`} 
//     { ...otherProps }
//   >
//     { children }
//   </button>
// )
const CustomButton = ({children, ...props}) => (
  <CustomButtonContainer  
    { ...props }
  >
    { children }
  </CustomButtonContainer>
)

export default CustomButton