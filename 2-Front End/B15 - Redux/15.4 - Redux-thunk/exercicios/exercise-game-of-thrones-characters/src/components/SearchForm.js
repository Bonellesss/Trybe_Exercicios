import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
// importe a ação oriunda do thunk
import './SearchForm.css';
import { fetchCharacter } from '../actions/action';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

handleChange(e) {
  this.setState({
    inputText: e.target.value,
    characterSearched: '',
  })
}

submitName(e) {
  e.preventDefault();
  const { inputText } = this.state;
  const { fetchChar } = this.props;
  //desestruture a ação do thunk como propriedade aqui

  this.setState({
    inputText: '',
    characterSearched: inputText,
  })
  // insira a action a ser despachada para o thunk
  fetchChar(inputText);
}

render() {
  const { inputText } = this.state;
  return (
    <div>
      <form onSubmit={this.submitName}>
        <h1>Type a character below:</h1>
        <input onChange={this.handleChange} 
        placeholder="Enter Character"
        value={inputText}
        />
        <div className="buttonSection">
          <button className="submitButton" type="submit" >Search!</button>
        </div>
      </form>
    </div>
  )
}
};

// mapeie as ações despachadas como propriedade do componente
const mapDispatchToProps = (dispatch) => ({
  fetchChar: (state) => dispatch(fetchCharacter(state))
});

// conecte as ações despachadas ao redux
export default connect(null, mapDispatchToProps)(SearchForm)
//faça as proptypes da ação oriunda do thunk

