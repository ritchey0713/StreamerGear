import React, { Component } from "react"

class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  render(){
    return (
      <div className="sign-in">  
        <h2>I have an account</h2>
        <span>Please sign in using your email address and password</span>

        <form>
          <input name="email" type="email" value={this.state.email} required />
          <label>Email</label>

          <input name="password" type="password" value={this.state.password} required />
          <label>Password</label>

          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}