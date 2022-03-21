import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      modulos: '',
      name: '',
      age: 0,
      introduction: '',
      isvalid: false,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checked; 
    console.log(name)
    this.setState(({
      [name]: value
    }))
  }
  
  render (){
    const { state: {
      modulos, name, age, introduction
    }, handleChange } = this

    return (
      <form>
        <h1>My Form</h1>
        <select name="modulos" onChange={ handleChange } value={ modulos } >
          <option value="" key=""></option>
          <option value="Fundamentos" key="1">Fundamentos</option>
          <option value="Front-End" key="2">Front-End</option>
          <option value="Back-End" key="3">Back-End</option>
          <option value="Ciencia da Computação" key="4">Ciencia da Computação</option>
        </select>
        <input type="text" name="name" onChange={ handleChange } value={ name } />
        <input type="number" name="age" onChange={ handleChange } value={ age } />
        <textarea name="introduction" cols="30" rows="10" onChange={ handleChange } value={ introduction } ></textarea>
        <input type="checkbox" name='isvalid' onChange={ handleChange } />
      </form>
    )
  }
}

export default Form; 