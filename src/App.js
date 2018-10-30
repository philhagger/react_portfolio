import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize-css';
import './App.scss';

import Header from './components/Header';

import Home from './pages/Home';
import Films from './pages/Films';
import NotFound from './pages/NotFound';
import UserProfile from './pages/UserProfile';

class App extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users/7';
    fetch(url)
      .then(response => response.json())
      .then(user => {
        this.setState({ user });
      });
  }
  handleUpdate = user => {
    console.log(user);
    this.setState({ user: { ...this.state.user, ...user } });
  };
  render() {
    return (
      <Router>
        <div>
          <Header user={this.state.user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={props => <UserProfile user={this.state.user} handleUpdate={this.handleUpdate} {...props} />} />
            <Route path="/films" component={Films} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
