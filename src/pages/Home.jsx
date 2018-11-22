import React, { Component, Fragment } from 'react';

import { Modal, Prompt } from '../components/Modal/Modal';

class Home extends Component {
  state = {
    modalOpen: false,
    promptOpen: false
  };
  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };
  render() {
    return (
      <Fragment>
        <h3>Home page</h3>
        <button onClick={this.handleModalOpen}>Open</button>
        {this.state.modalOpen && (
          <Modal title="Test header" close={this.handleModalClose} overlayClose={false}>
            Modal content goes here!
          </Modal>
        )}
        {this.state.promptOpen && (
          <Prompt title="Test Prompt" close={this.handleModalClose} confirm={this.handleModalClose}>
            Content
          </Prompt>
        )}
      </Fragment>
    );
  }
}

export default Home;
