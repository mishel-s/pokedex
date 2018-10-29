let arrPromisesPokemons = [];

let getArrPromises = () => {
    for (let i = 1; i <= 50; i++) {
        arrPromisesPokemons.push(
            fetch("https://pokeapi.co/api/v2/pokemon/" + i + '/')
                .then(response=> {
                    return response.json();
                })
        );
    };
}

let GetPokemonsInfo = () => {
    let pokemonsInfo = [];
    return Promise.all(arrPromisesPokemons)
            .then((pokemons)=> {
                console.log(pokemons);
                pokemons.forEach((pokemon)=> {
                    pokemonsInfo.push(pokemon)
                })
                console.log(pokemonsInfo);
                return pokemonsInfo;
            })
            .catch((error) => {
                console.log("ERROR:" + error);
            });
};

export default function () {
    getArrPromises();
    return GetPokemonsInfo();
}
