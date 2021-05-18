import React, { Component } from "react";
import "./List.css";
 
class Friends extends Component {

    constructor(props) {
        super(props);

        this.state = {
            friends: []
          };
     
    }

    render() {
        return (
            <div className="friends">
                <div className="header">
                    <form>{/*onSubmit={this.addItem}*/}
                        <input ref={(a) => this._inputElement = a}
                               placeholder="Search for Friend">
                        </input>
                        <button type="submit">search</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Friends;