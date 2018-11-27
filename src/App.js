import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize-css';
import './App.scss';
// import colors from './App.scss'; // These are the variables exported from App.scss.

import Header from './components/Header/Header';

import HomePage from './pages/HomePage';
import ButtonsPage from './pages/ButtonsPage';
import InputsPage from './pages/InputsPage';
import ModalsPage from './pages/ModalsPage';
import NotFoundPage from './pages/NotFoundPage';
import User from './pages/User';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';

import { getDefaultUser } from './services/UserData';

/**
 * Main Application
 * As I am currently not using REDUX the application state would sit here and need to be passed down to each component that required it.
 */
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
        <Fragment>
          <Header user={this.state.user} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/userprofile" component={props => <UserProfile user={this.state.user} handleUpdate={this.handleUpdate} {...props} />} />
            <Route path="/buttons" component={ButtonsPage} />
            <Route path="/modals" component={ModalsPage} />
            <Route path="/inputs" component={InputsPage} />
            <Route path="/users" component={Users} />
            <Route path="/user/:id" component={User} />
            <Route component={NotFoundPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
