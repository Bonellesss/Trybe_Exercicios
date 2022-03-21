import React from "react";
import "./App.css";
import pokemons from "./data";
import Pokedex from "./Pokedex";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
