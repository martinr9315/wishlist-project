import React, { Component } from 'react';
import style from './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className={style.Menu}>
      <ul>
        <li><a href="/dashboard.html">Home</a></li>
        <li><a href="/my-list.html">My List</a></li>
        <li><a href="/my-friends.html">My Friends</a></li>
        <li><a href="/index.html">Back to Login</a></li>
      </ul>
      </div>
    );
  }
}
