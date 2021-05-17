import React, { Component } from 'react';

export default class EnterFriend extends Component {
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <form>
                        <h3>Add Friend</h3>
                        <label for="username">Username:</label>
                        <input type="text" name="username">
                        </input>
                        <input type="submit" value="Add"></input>
                    </form>
                </div>
            </div>
        )
    }
}
