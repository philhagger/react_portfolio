import React from 'react';
import { Button, PrimaryButton, SecondaryButton } from '../components/Button/Button';

const Buttons = () => (
  <div>
    <h3>Components</h3>
    <Button onClick={() => console.log('Button clicked!')}>Default Button</Button>
    <Button disable={true}>Disabled Button</Button>
    <PrimaryButton onClick={() => console.log('Primary Button clicked!')}>Primary Button</PrimaryButton>
    <SecondaryButton onClick={() => console.log('Secondary Button clicked!')}>Secondary Button</SecondaryButton>
  </div>
);

export default Buttons;
