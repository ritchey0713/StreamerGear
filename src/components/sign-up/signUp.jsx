import React, { Component } from 'react'
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebase'

import { SignUpContainer, TitleContainer } from "./Signup.styles"

class SignUp extends Component {
  constructor(){
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state

    if(password !== confirmPassword) {
      alert("Passwords don't match!")
      return 
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      this.setState({ 
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    }catch(err) {
      console.log("ERROR", err)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return(
      <SignUpContainer>
        <TitleContainer>I do not have an account</TitleContainer>
        <span>Sign up with your email!</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label= "Display name"
          ></FormInput>

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label= "Email"
          ></FormInput>

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label= "Password"
          ></FormInput>

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label= "Confirm Password"
          ></FormInput>

          <CustomButton type="submit"> Sign up! </CustomButton>

        </form>
      </SignUpContainer>
    )
  }
}

export default SignUp