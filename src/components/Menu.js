import React, { Component } from 'react';
import style from './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <ul className={style.Menu}>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/my-list.html">My List</a></li>
        <li><a href="/my-friends.html">My Friends</a></li>
      </ul>
    );
  }
}
