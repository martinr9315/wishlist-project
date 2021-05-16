import React, { Component } from "react";
 
class ListItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var wishlistEntries = this.props.entries;
    var items = wishlistEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
          {items}
      </ul>
    );
  }
};
 
export default ListItems;