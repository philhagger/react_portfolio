import React from 'react';
import { Input, TextArea } from '../components/Input/Input';

const InputsPage = () => (
  <div style={{ padding: '10px' }}>
    <h3>Inputs</h3>
    <h5>Input</h5>
    <Input />
    <h5>TextArea</h5>
    <TextArea defaultValue="This is a text area" />
  </div>
);

export default InputsPage;
