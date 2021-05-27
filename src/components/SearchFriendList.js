import React, { Component } from "react";
 
class FriendSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentFriends: ['Bob', 'Tim', 'Sam']
          };

        this.friendSearch = this.friendSearch.bind(this);
    }

    friendSearch(event) {
        if (this.state.currentFriends.includes(this._inputElement.value) === false)
        {
            alert('Friend not Present');
            event.preventDefault();
        }
        else
        {
            alert('Friend Present! Here is their list.');
            {/* Get friend list and place it here */};
        }
    }

    render() {
        return (
            <div className="search">
                <div className="header"> <br/>
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
 
export default FriendSearch;