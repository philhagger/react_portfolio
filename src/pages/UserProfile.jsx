import React, { Component } from 'react';
import { Input } from '../components/Input';

class UserProfile extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users/7';
    fetch(url)
      .then(response => response.json())
      .then(user => {
        this.setState({ user });
      });
  }
  render() {
    return (
      <div>
        <h2>User Profile</h2>
        <Input type="text" />
        <Input type="text" />
        <Input type="text" />
        <Input type="text" />
        <div>
          <label>Name:</label> {this.state.user.name}
          <br />
          <label>Email:</label> {this.state.user.email}
          <br />
          <label>Mobile:</label> {this.state.user.phone}
          <br />
          <label>URL:</label> {this.state.user.website}
          <br />
        </div>
      </div>
    );
  }
}
export default UserProfile;
