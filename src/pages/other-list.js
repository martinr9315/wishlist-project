import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import FriendList from 'components/FriendList';

import './index.css';
ReactDOM.render(<Menu />, document.getElementById('menu'),);
ReactDOM.render(<FriendList />, document.getElementById('friend-list'),);

