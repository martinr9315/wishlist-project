import React, { Component } from "react";
import "./List.css";
 
class Friends extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentFriends: ['Bob', 'Sam', 'Tim']
          };

        this.friendSearch = this.friendSearch.bind(this);
    }

    friendSearch(e) {
        if (this.state.currentFriends.includes(this._inputElement.value) === false)
        {
            alert('Friend not Present');
            e.preventDefault();
        }
        else
        {
            alert('Friend Present! Here is their list.');
            {/* Get friend list and place it here */};
        }
    }

    render() {
        return (
            <div className="friends">
                <div className="header">
                    <form onSubmit={this.friendSearch}>
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