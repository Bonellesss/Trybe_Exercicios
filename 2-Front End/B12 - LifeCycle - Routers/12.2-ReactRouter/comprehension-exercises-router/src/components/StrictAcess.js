import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class StrictAcess extends Component {
  render() {
    const { username, password } = this.props.user;
  
    if (!(username && password.length >= 4)) {
      alert('Acess Denied');
      return <Redirect to="/" />
    }
    return <p>Welcome {username}!</p>;
  }
}

export default StrictAcess;