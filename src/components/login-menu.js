import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import style from "./login-menu.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this));
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
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
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={this.handleUsernameChange} value={this.state.username} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
