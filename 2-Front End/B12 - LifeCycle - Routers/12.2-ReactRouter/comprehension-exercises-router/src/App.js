import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users'
import StrictAcess from './components/StrictAcess';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/100">Users</Link>
        <Link to="/strict">Restrict Area</Link>
        <Switch>
          <Route exact path="/users/:id" render={(props) =>  <Users {...props} greetingsMessage="Good Morning" />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/strict" render={(props) => <StrictAcess {...props} user={{ username: 'joao', password: '123' }} />} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
