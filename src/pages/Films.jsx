import React from 'react';
import { Route } from 'react-router-dom';
import { Button, PrimaryButton, SecondaryButton } from '../components/Button';

import Persona from '../components/Persona';

const Films = () => (
  <div>
    <h3>Films</h3>
    <Button onClick={() => console.log('Button clicked!')}>Default Button</Button>
    <Button className="btn--disabled">Disabled Button</Button>
    <PrimaryButton onClick={() => console.log('Primary Button clicked!')}>Primary Button</PrimaryButton>
    <SecondaryButton onClick={() => console.log('Secondary Button clicked!')}>Secondary Button</SecondaryButton>
    <Route path="/films/1" component={Persona} />
  </div>
);

export default Films;
