import React from 'react';
import { PrimaryButton } from '../components/Button/Button';

import './homepage.scss';

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <h1 className="homepage__title">Home page</h1>
        <h3 className="homepage__subtitle">This is a subtitle about this page</h3>
        <div className="homepage__button--animate-once">
          <PrimaryButton className="homepage__button">Enter</PrimaryButton>
        </div>
      </div>
    );
  }
}

export default HomePage;
