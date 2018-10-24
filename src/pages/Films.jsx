import React from 'react';
import { Button, PrimaryButton, SecondaryButton } from '../components/Button';

const Films = () => (
  <div>
    <h3>Films</h3>
    <Button onClick={() => console.log('Button clicked!')}>Default Button</Button>
    <Button className="btn--disabled">Disabled Button</Button>
    <PrimaryButton onClick={() => console.log('Primary Button clicked!')}>Primary Button</PrimaryButton>
    <SecondaryButton onClick={() => console.log('Secondary Button clicked!')}>Secondary Button</SecondaryButton>
  </div>
);

export default Films;
