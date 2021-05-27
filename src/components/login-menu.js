import React, { Component } from "react";
import Axios from "axios";
import style from "./login-menu.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = { username: "", password: "" };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const registered = {
      username: this.state.username,
      password: this.state.password,
    };
    Axios.post("http://localhost:3101/register", registered).then(
      (response) => {
        console.log(response.data);
      }
    );
    this.setState({
      username: "",
      password: "",
    });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <div className="login-wrapper">
        <h2>Please Log In</h2>
        <form onSubmit={this.onSubmit}>
          <label>
            <p>Username</p>
            <input
              type="text"
              onChange={this.handleUsernameChange}
              value={this.state.username}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              onChange={this.handlePasswordChange}
              value={this.state.password}
            />
          </label>
          <div>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    );
  }
}
