import React from 'react';
import './App.css';
import Button from './components/Button';

class App extends React.Component {
  render(){
    return( 
      <div>
        <Button text="olá" />
        <Button text="eu sou" />
        <Button text="o Goku" />
      </div>
    )
  }
}

export default App;