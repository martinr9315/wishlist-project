import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "navigation-bar.css";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className={style.Menu}>
          <li>
            <a href="/index.html">Home</a>
          </li>
          <li>
            <a href="/my-list.html">My List</a>
          </li>
          <li>
            <a href="/my-friends.html">My Friends</a>
          </li>
        </ul>
      </nav>
    );
  }
}
