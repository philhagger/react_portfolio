import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../services/UserData';

export default class Users extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    getAllUsers().then(users => this.setState({ users }));
  }
  render() {
    return (
      <Fragment>
        {this.state.users.length === 0 && <p>No Users found</p>}
        <ul>
          {this.state.users &&
            this.state.users.map(user => (
              <li key={user.id}>
                <Link to={`user/${user.id}`}>
                  {user.firstName} {user.lastName}
                </Link>
              </li>
            ))}
        </ul>
      </Fragment>
    );
  }
}
