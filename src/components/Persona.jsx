import React, { Component } from 'react';

import './persona/persona.scss';

import userPicture from './persona/me.jpg';

const personaImg = {
  width: '25px',
  borderRadius: '10px'
};

export default class Persona extends Component {
  state = {};
  render() {
    return (
      <div className="persona">
        <img src={userPicture} style={personaImg} className="persona__img" alt="User profile" />
        <span className="persona__text">Phil Hagger</span>
      </div>
    );
  }
}
