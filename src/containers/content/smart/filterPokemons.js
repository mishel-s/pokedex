import React from 'react';

let checkpokemonTypes = (pokemonsTypes, checkedTypes) => {
  let arrShowPokemon = [];
  for(let i=0; i < checkedTypes.length; i++) {
    let arr = [];
    pokemonsTypes.forEach(pokemonType => {
        if(pokemonType.type.name == checkedTypes[i]) {
            arr.push('show');
        } else arr.push('hide');
    });
    if(arr.includes('show')) {
      arrShowPokemon.push('show');
    } else arrShowPokemon.push('hide');
  }
  if(arrShowPokemon.includes('hide')) {
    return 'hide';
  } else return 'show';
}

let checkPokemons = (pokemons, checkedTypes) => {
    const showPokemons = pokemons.filter(pokemon=>
      checkpokemonTypes(pokemon.types, checkedTypes) == 'show'
    );
    return showPokemons;
}

export default checkPokemons;
