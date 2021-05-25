import React, { Component } from "react";
import style from './Checkbox.css';
import  Checkbox  from './Checkbox';
 
class FriendList extends Component {
    constructor(props) {
      super(props)

      //sample items, will eventually be pulled from database 
      this.state = {
        items: [
          {key: 1, value: "item 1", isChecked: false},
          {key: 2, value: "item 2", isChecked: false},
          {key: 3, value: "item 3", isChecked: false},
          {key: 4, value: "item 4", isChecked: false}
        ]
      }
    }
  
    handleCheckElement = (event) => {
      let items = this.state.items
      items.forEach(item => {
         if (item.value === event.target.value)
            item.isChecked =  event.target.checked
      })
      this.setState({items: items})
    }
  
    render() {
      return (
        <div className = {style.Checkbox}>
            <ul>
            {
                this.state.items.map((item) => {
                return (<Checkbox handleCheckElement={this.handleCheckElement}  {...item} />)
                })
            }
            </ul>
          </div>
      );
    }
  }
  
  export default FriendList