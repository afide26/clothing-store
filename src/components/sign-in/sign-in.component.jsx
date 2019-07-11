import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value
      },
      () => console.log(this.state)
    );
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            value={password}
            required
            handleChange={this.handleChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
