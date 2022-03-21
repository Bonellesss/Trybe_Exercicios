import React, { Component } from 'react';
import Input from './Input';

const states = ["Acre", "Alagoas", "Amazonas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Rio Grande do Sul", "Roraima", "Santa Catarina", "Sergipe", "São Paulo", "Tocantins"]

class UserInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      type: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }){
    let { value, name } = target;

    if (name === 'name') value = value.toUpperCase();
    
    this.setState({ [name]: value })
  }
  
  render() {
    const { state: { name, email, cpf, adress, city, state, type }, handleChange } = this;

    return (
      <fieldset>
        <legend>Pesonal Data: </legend>
        <Input
          type="text"
          max="40"
          name="name"
          value={ name }
          handleChange={handleChange}
          label="Name: "
        />
        <Input 
          type="text"
          max="50"
          name="email"
          value={ email }
          handleChange={handleChange}
          label="Email: "
        />
        <Input 
          type="text"
          max="11"
          name="cpf"
          value={ cpf }
          handleChange={handleChange}
          label="CPF: "
        />
        <Input 
          type="text"
          max="200"
          name="adress"
          value={ adress }
          handleChange={handleChange}
          label="Endereço: "
        />
        <Input 
          type="text"
          max="28"
          name="city"
          value={ city }
          handleChange={handleChange}
          label="Cidade: "
        />
        <Input 
          type="text"
          max="50"
          name="email"
          value={ email }
          handleChange={handleChange}
          label="Email: "
        />
        <label htmlFor='state'>
          Estado: 
          <select name='state' defaultValue={''} onChange={handleChange} value={ state } id="state" >
            <option value="" key="vazio">Selecione seu Estado</option>
            {states.map(state => <option value={state} key={state}>{state}</option>)}
          </select>
        </label>
        <label>
          Tipo de Moradia: 
          <Input 
            type="radio"
            name="type"
            value='casa'
            handleChange={handleChange}
            label="Casa"
          />
          <Input 
            type="radio"
            name="type"
            value='apartamento'
            handleChange={handleChange}
            label="apartamento"
          />
        </label>
      </fieldset>
    )
  }
}

export default UserInfo;