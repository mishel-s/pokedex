import React from 'react';
import checkPokemons from "../../content/smart/filterPokemons.js";

let checkedTypes = [];
let toggleChecked = (e) => {
    let pokemon = document.getElementById(e.target.id);
    if(e.target.className == 'hide' || e.target.className == '') {
        pokemon.className = 'show';
        pokemon.style.backgroundColor = '#2F8FD8';
        checkedTypes.push(e.target.id);
    } else {
        pokemon.className = 'hide';
        pokemon.style.backgroundColor = 'transparent';
        checkedTypes = checkedTypes.filter(val => {
                    return val !== e.target.id
                });
    }
}

let CreateTypesList = (props) => {
    const types = props.types;
    const addTypeToList = props.addTypeToList;
    const removeTypeFromList = props.removeTypeFromList;
    return (
        <ul>
            {
                types.map((type) => (
                    <li
                        key={type.toString()}
                        id={type}
                        onClick={(e)=>{
                            toggleChecked(e);
                            props.filterContentPokemons(checkPokemons(props.pokemonsInfo, checkedTypes));
                            addTypeToList(checkedTypes);
                        }}
                    >
                        {type}
                        </li>
                ))
            }
        </ul>
    );
}

export default CreateTypesList;
