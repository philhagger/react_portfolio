import React, { Component } from 'react';

import PersonaView from './persona/PersonaView';

class PersonaContainer extends Component {
  render() {
    return <PersonaView user={this.props.user} />;
  }
}

export default PersonaContainer;
