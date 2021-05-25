import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import FriendSearch from 'components/SearchFriendList';

import './index.css';
ReactDOM.render(<Menu />, document.getElementById('menu'),);
ReactDOM.render(<FriendSearch />, document.getElementById('search'),);

