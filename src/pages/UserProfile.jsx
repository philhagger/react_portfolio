import React, { Component } from 'react';
import { Input } from '../components/Input';
import { PrimaryButton, SecondaryButton } from '../components/Button';

class UserProfile extends Component {
  //local state holds the user object passed in from props...not sure if this is needed or not
  state = {
    user: this.props.user
  };
  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState(() => ({ user: { ...this.state.user, [name]: value } }));
  };
  handleReset = () => {
    this.setState({ user: this.props.user });
  };
  handleUpdate = event => {
    this.props.handleUpdate(this.state.user);
  };
  render() {
    return (
      <div>
        <h2>User Profile</h2>
        <label>Name:</label>
        <Input onChange={this.handleChange} name="name" value={this.state.user.name} type="text" />
        <label>Email:</label>
        <Input onChange={this.handleChange} name="email" value={this.state.user.email} type="text" />
        <PrimaryButton onClick={this.handleUpdate}>Update</PrimaryButton>
        <SecondaryButton onClick={this.handleReset}>Reset</SecondaryButton>
      </div>
    );
  }
}
export default UserProfile;
