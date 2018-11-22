import React, { Fragment } from 'react';
import { Input, PrimaryInput, TextArea } from '../components/Input/Input';

const InputsPage = () => (
  <Fragment>
    <h3>Inputs</h3>
    <h5>Input</h5>
    <Input />
    <br />
    <h5>PrimaryInput</h5>
    <PrimaryInput />
    <br />
    <h5>TextArea</h5>
    <TextArea defaultValue="This is a text area" />
  </Fragment>
);

export default InputsPage;
