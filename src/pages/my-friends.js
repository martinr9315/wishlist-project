import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import './index.css';
import FriendSearch from 'components/SearchFriendList'

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<FriendSearch />, document.getElementById('friends'));