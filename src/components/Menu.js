import React, { Component } from 'react';
import style from './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div className={style.Menu}>
      <ul>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/my-list.html">My List</a></li>
        <li><a href="/my-friends.html">My Friends</a></li>
      </ul>
      </div>
    );
  }
}
