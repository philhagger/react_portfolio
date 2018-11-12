import React, { Component } from 'react';
import { getUserData } from '../services/UserData';

export default class User extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    getUserData(this.props.match.params.id).then(user => {
      console.log(user);
      this.setState({ user });
    });
  }
  setAsDefault = () => {
    localStorage.setItem('user', JSON.stringify(this.state.user));
  };
  render() {
    return (
      <div>
        <h3>
          {this.state.user.firstName} {this.state.user.lastName}
        </h3>
        <p>{this.state.user.email}</p>
        <p>{JSON.stringify(this.state.user.active)}</p>
        <button onClick={this.setAsDefault}>Set as default</button>
      </div>
    );
  }
}
