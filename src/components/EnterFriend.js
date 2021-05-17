import React, { Component } from 'react';

export default class EnterFriend extends Component {
    constructor(props) {
        super(props)
        this.state = { friends: []}
    }
    handleSubmit = event => {
        event.preventDefault();
        var username = document.getElementById("addFriend").username.value;
        console.log(username);
        console.log(this.state.friends)
    } 
    render() {
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
            </div>
        )
    }
}
