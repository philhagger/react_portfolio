import React, { Component } from 'react';

import PersonaView from './persona/PersonaView';

class PersonaContainer extends Component {
  state = {
    user: { name: 'Phil Hagger' }
  };
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users/7';
    fetch(url)
      .then(response => response.json())
      .then(user => {
        console.log('User:', user);
        this.setState({ user });
      });
  }
  render() {
    return <PersonaView user={this.state.user} initials={this.state.initials} />;
  }
}

export default PersonaContainer;
