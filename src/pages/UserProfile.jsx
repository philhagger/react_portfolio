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
        <label>Name:</label>
        <Input type="text" value={this.state.user.name} />
        <label>Email:</label>
        <Input type="text" value={this.state.user.email} />
        <label>Mobile:</label>
        <Input type="text" value={this.state.user.phone} />
        <label>URL:</label>
        <Input type="text" value={this.state.user.website} />
      </div>
    );
  }
}
export default UserProfile;
