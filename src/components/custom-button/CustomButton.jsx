import React from "react"

const CustomButton = ({ children, isGoogleSignIn, itemPageButton, inverted, ...otherProps }) => (
  <button className={`${inverted && 'inverted'} ${isGoogleSignIn && 'google-sign-in'} ${itemPageButton ? 'items-button custom-button' : 'custom-button'}`} 
    { ...otherProps }
  >
    { children }
  </button>
)

export default CustomButton