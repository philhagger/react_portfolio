import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize-css';
import './App.scss';
// import colors from './App.scss'; // These are the variables exported from App.scss.

import Header from './components/Header';

import Home from './pages/Home';
import Films from './pages/Films';
import NotFound from './pages/NotFound';
import User from './pages/User';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';

import { getDefaultUser } from './services/UserData';

class App extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    const userId = Math.floor(Math.random() * (1000 * 1) + 1);
    getDefaultUser(userId).then(user => this.setState({ user }));
  }
  handleUpdate = user => {
    console.log('Update', user);
    this.setState({ user: { ...this.state.user, ...user } });
  };
  componentDidUpdate(prevProps, prevState) {
    // A quick comparison of the prevState and current state to stop any unnecessary updates.
    if (JSON.stringify(prevState.user) !== JSON.stringify(this.state.user)) {
      console.log('Update detected', prevState.user, this.state.user);
      localStorage.setItem('user', JSON.stringify(this.state.user));
    }
  }
  render() {
    return (
      // Passing the component as an arrow function allows props to be injected. This would probably be better replaced with Redux or similar state control in the long run.
      <Router>
        <div className="autumn-theme">
          <Header user={this.state.user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/userprofile" component={props => <UserProfile user={this.state.user} handleUpdate={this.handleUpdate} {...props} />} />
            <Route path="/films" component={Films} />
            <Route path="/users" component={Users} />
            <Route path="/user/:id" component={User} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
