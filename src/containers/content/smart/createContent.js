import React from 'react';
import PokemonCard from "../../../components/common/pokemonCard";

let CreateContent = (props) => {
    const itemsPerPage = props.itemsPerPage;
    const pokemons = props.pokemons;
    let listPokemons = [];
    console.log(pokemons.length);
    if(pokemons.length) {
      for(let i=0; i < itemsPerPage; i++) {
        if(pokemons[i] != undefined) {
          listPokemons.push(<PokemonCard key={pokemons[i].name.toString()} pokemon={pokemons[i]} />)
        }
      }
      return (
          <React.Fragment>{listPokemons}</React.Fragment>
      );
    } else return (<React.Fragment>NO INFORMATION</React.Fragment>)
}

export default CreateContent;
