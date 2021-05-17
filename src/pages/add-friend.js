import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import EnterFriend from 'components/EnterFriend';

import './index.css';
ReactDOM.render(<Menu />, document.getElementById('menu'),);
ReactDOM.render(<EnterFriend />, document.getElementById('enter'),);