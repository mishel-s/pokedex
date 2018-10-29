let GetPokemonsTypes = () => {
    return fetch("https://pokeapi.co/api/v2/type/")
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                console.log("ERROR:" + error);
            });
};

export default function () {
    return GetPokemonsTypes();
}