import React, { Component } from "react";
import style from './List.css';
 
class ListItems extends Component {
  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return <li onClick={() => this.delete(item.key)} 
                key={item.key}>{item.text}</li>
  }
 
  render() {
    var wishlistEntries = this.props.entries;
    var items = wishlistEntries.map(this.createTasks);
 
    return (
      <div className={style.List}>
        <ul>
            {items}
        </ul>
      </div>
    );
  }
};
 
export default ListItems;