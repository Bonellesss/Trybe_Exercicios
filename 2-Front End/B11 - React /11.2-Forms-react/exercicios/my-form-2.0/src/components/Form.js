import React, { Component } from 'react';
import UserInfo from './UserInfo';

class Form extends Component {
  render() {
    return (
      <form>
        <h1>My Form 2.0</h1>
        <UserInfo />
      </form>
    )
  }
}

export default Form;