import React, { Component } from 'react';

export default class EnterFriend extends Component {
    constructor(props) {
        super(props)
        this.state = { friends: []}
    }
    handleSubmit = event => {
        event.preventDefault();
        var username = document.getElementById("addFriend").username.value;
        let friends = this.state.friends;
        if(friends.includes(username)){
            alert(username + " already added!");
        } else {
            friends.push(username);
            this.setState({
                friends:friends
            });
            console.log(username + " added");
            console.log(this.state.friends);
        }
        document.getElementById("addFriend").reset();
    } 

    removeFriend(friend) {
        this.setState({
            friends: this.state.friends.filter(function(username) {
                return username !== friend;
            })
        })
    }

    render() {
        const friends = this.state.friends;
            const currentFriends = friends.map((username) => 
                    <li key={username}>
                        {username}
                        <button onClick={() => this.removeFriend(username)}>Remove</button>
                    </li>
            );
        return (
            <div className="main">
                <div className="mainDiv">
                    <form id="addFriend" onSubmit={this.handleSubmit.bind(this)}>
                        <h3>Add Friend</h3>
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username">
                        </input>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
                <h3>Current Friends</h3>
                <div className="friend-list">
                    <ul>{currentFriends}</ul>
                </div>
            </div>
        )
    }
}
