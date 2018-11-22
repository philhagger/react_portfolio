import React, { Component, Fragment } from 'react';
import { Alert, Prompt } from '../components/Modal/Modal';
import { Button } from '../components/Button/Button';

class Modals extends Component {
  state = {
    alert: false,
    prompt: false
  };
  handleAlertToggle = () => {
    this.setState({ alert: false });
  };
  handlePromptClose = () => {
    this.setState({ prompt: false });
    console.log('You clicked cancel');
  };
  handlePromptConfirm = () => {
    this.setState({ prompt: false });
    console.log('You clicked confirm');
  };
  render() {
    return (
      <Fragment>
        <h3>Modals</h3>
        <Button onClick={() => this.setState({ alert: true })}>Open Alert</Button>
        {this.state.alert && (
          <Alert title="Test header" close={this.handleAlertToggle}>
            Modal content goes here!
          </Alert>
        )}
        <Button onClick={() => this.setState({ prompt: true })}>Open Prompt</Button>
        {this.state.prompt && (
          <Prompt title="This is a prompt" close={this.handlePromptClose} confirm={this.handlePromptConfirm} overlayClose={false}>
            Prompt content goes here!
          </Prompt>
        )}
      </Fragment>
    );
  }
}

export default Modals;
