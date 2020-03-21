import React from "react"

const CustomButton = ({ children, ...otherProps }) => (
  <button class="custom-button"{ ...otherProps }>
    { children }
  </button>
)

export default CustomButton