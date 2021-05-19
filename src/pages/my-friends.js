import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import './index.css';
import Friends from 'components/Friends'

ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Friends />, document.getElementById('friends'));