import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, max, label, name, value, handleChange } = this.props;

    return (
      <label htmlFor={name}>
        {label}
        <input type={type} maxLength={max} name={name} id={name} value={value} onChange={handleChange} />
      </label>
    )
  }
}

export default Input;
