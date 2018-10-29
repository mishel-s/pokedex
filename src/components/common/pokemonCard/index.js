import React from 'react';
import styles from  './styles.css';

let getPokemonTypes = (types) => {
    let arrTypes = [];
    for (let i=0; i < types.length; i++) {
        arrTypes.push(types[i].type.name);
    }
    return arrTypes;
}

let ShowPokemonTypes = (props) => {
    let types = props.types;
    return types.join(', ');
}

let showPokemonBigInfo = (props) => {
    let pokemonBigInfo = document.getElementById(props.id);
    let pokemonBg = document.getElementById(props.id + '_Bg');
    pokemonBigInfo.style.display = 'flex';
    pokemonBg.style.right = '0';
}

let closePokemonBigInfo = (props) => {
    let pokemonBigInfo = document.getElementById(props.id);
    let pokemonBg = document.getElementById(props.id + '_Bg');
    pokemonBigInfo.style.display = 'none';
    pokemonBg.style.right = '100%';
}

export default function PokemonCard(props) {
    const {name, id, weight, height} = props.pokemon;
    const types = getPokemonTypes(props.pokemon.types);
    const photo = props.pokemon.sprites.front_default;
    const link = "https://pokeapi.co/api/v2/pokemon/" + props.pokemon.id + "/";
    return (
        <React.Fragment>
            <div onClick={()=> {showPokemonBigInfo(props.pokemon)}} className={styles.pokemonCard}>
                <img src={photo} alt="pokemonLogo" />
                <div className={styles.pokemonDescription}>
                    <div className={styles.pokemonDescription_name}>
                        {name.toUpperCase()}
                    </div>
                    <div className={styles.pokemonDescription_type}>
                        Type: <ShowPokemonTypes types={types}/>.
                    </div>
                </div>
            </div>
            <div id = {id} className={styles.pokemonBigInfo}>
                <div id = {id + '_Bg'} className={styles.pokemonBg}></div>
                <div id = {id + '_Main'} className={styles.pokemonMain}>
                    <div className={styles.pokemonClose}>
                        <div className={styles.pokemonClose_X} onClick={()=> {closePokemonBigInfo(props.pokemon)}}>X</div>
                    </div>
                    <div className={styles.pokemonInfo}>
                        <div className={styles.pokemonInfo_logo}>
                            <img src={photo} alt="pokemonLogo" />
                        </div>
                        <div className={styles.pokemonInfo_details}>
                            <p className={styles.pokemonInfo_details__name}><b>{name.toUpperCase()}</b></p>
                            <p className={styles.pokemonInfo_details__types}><b>Type:</b> <ShowPokemonTypes types={types}/></p>
                            <p className={styles.pokemonInfo_details__weight}><b>Weight:</b> {weight}</p>
                            <p className={styles.pokemonInfo_details__height}><b>Height:</b> {height}</p>
                            <p className={styles.pokemonInfo_details__link}><b>Link:</b> <a href={link}>{link}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
