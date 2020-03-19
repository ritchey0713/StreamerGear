import React, { Component } from "react"

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
          <input 
            name="email" 
            type="email" 
            value={this.state.email} 
            required 
            onChange={this.handleChange}
          />
          <label>Email</label>

          <input 
            name="password" 
            type="password" 
            value={this.state.password} 
            required 
            onChange={this.handleChange}
          />
          <label>Password</label>

          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default SignIn