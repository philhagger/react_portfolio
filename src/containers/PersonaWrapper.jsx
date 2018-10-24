import React, { Component } from 'react';

import Persona from '../components/Persona';

export default class PersonaContainer extends Component {
  state = {
    user: {}
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
    return <Persona user={this.state.user} initials={this.state.initials} />;
  }
}
