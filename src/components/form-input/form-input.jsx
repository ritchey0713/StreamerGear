import React from 'react'
import { GroupContainer, InputContainer, LabelContainer } from "./FormInput.styles"

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <InputContainer onChange={handleChange} { ...otherProps }/>
    {
      label && 
      <LabelContainer {...otherProps}>
        {label}
      </LabelContainer>
    }
  </GroupContainer>
)

export default FormInput