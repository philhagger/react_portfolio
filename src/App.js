import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'normalize-css';
import './App.scss';

import Header from './components/Header';

import Home from './pages/Home';
import Films from './pages/Films';
import NotFound from './pages/NotFound';
import UserProfile from './pages/UserProfile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={UserProfile} />
            <Route path="/films" component={Films} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
