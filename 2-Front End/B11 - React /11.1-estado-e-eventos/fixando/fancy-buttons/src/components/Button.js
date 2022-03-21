import { Component } from 'react';

class Button extends Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      cliques: 0
    }
  }

  handleClick(event) {
    this.setState((estadoAnterior, _props) => ({
      cliques: estadoAnterior.cliques + 1
    }),() => console.log(this))
  }

  render() {
    return( 
      this.state.cliques % 2 === 0 ?
      (<button onClick={this.handleClick} className="green"> {this.state.cliques} </button>)
      : (<button onClick={this.handleClick} >{this.state.cliques}</button>)
    )
  }
}

export default Button;