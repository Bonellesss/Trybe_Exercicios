import React from 'react';
import Botao from './Botao';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.pokeFilter = this.pokeFilter.bind(this)

        this.state = {
           click: 0,
           filter: 'fire',
        };
    }    

    pokeFilter(event) {
        
    }

    handleClick(){
        const { pokemons } = this.props;
        this.state.click !== pokemons.length - 1?
            (this.setState((prevState, _props) => ({
                click: prevState.click + 1,
            }))) :
            (this.setState((prevState, _props) => ({
                click: 0,
            })))
    }

    
    render() {
        const { pokemons } = this.props;
        const { click } = this.state;

        return (
            <div className="pokedex">
                <Pokemon key={pokemons[click].id} pokemon={pokemons[click]} />
                <Botao text="Próximo" event={this.handleClick} vaue=''/>
            </div>
        );
    }
}

export default Pokedex;