import React, { Component } from 'react';
import style from './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <ul className={style.Menu}>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/my-groups.html">My Groups</a></li>
      </ul>
    );
  }
}
