import React, { Component } from "react"
import FormInput from "../form-input/form-input"
import CustomButton from "../custom-button/CustomButton"

import { signInWithGoogle } from "../../firebase/firebase"

class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      email: "",
      password: ""
    })
  }

  handleChange = (e) => {
    const {value, name } = e.target
    this.setState({
      [name]: value
    })

  }

  render(){
    return (
      <div className="sign-in">  
        <h2>I have an account</h2>
        <span>Please sign in using your email address and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            required 
            handleChange={this.handleChange}
            label="email"
          />


          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            required 
            handleChange={this.handleChange}
            label="password"
          />

          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign in</CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

export default SignIn