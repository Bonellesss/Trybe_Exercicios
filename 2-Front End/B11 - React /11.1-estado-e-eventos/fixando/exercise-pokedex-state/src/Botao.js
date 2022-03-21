import React, { Component } from "react";

class Botao extends Component {
  render () {
    const { text, event, value } = this.props;

    return <button onClick={event}>{ text }</button>;
  }
}

export default Botao;