import { useState, useEffect } from "react";

class pokemons {
    constructor ({
        id,
        name,
        types,
        image
    }) {
        this.id = id;
        this.name = name;
        this.types = types
        this.image = image
    }
};

const useFetchInfoPokemons = (lista) => {


  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {

      try {
      
        if (lista.length > 0) {
          const currentList = await Promise.all(lista.map((pokemon) => fetch(pokemon.url).then(res => res.json())));
          const newPokemonsList = currentList.map((response) => new pokemons({
            id: response.id,
            name: response.name,
            types: response.types[0]['type'].name,
            image: response.sprites.other["official-artwork"].front_default
          }));

            // Guardar en localStorage
            localStorage.setItem('pokemonsList', JSON.stringify(newPokemonsList));

            // Actualizar el estado con los nuevos Pokémon
            setPokemonsList(newPokemonsList);
        }

      } catch (error) {
        console.error('Hubo un error en el fetch de datos', error);
      }
    };

  // Recuperar desde localStorage al cargar
  const storedPokemonsList = JSON.parse(localStorage.getItem('pokemonsList'));
  if (storedPokemonsList) {
      setPokemonsList(storedPokemonsList);
  } else {
      fetchDate();
  }  
  
}, [lista]);


  return {
    pokemonsList,
  };
};

export { useFetchInfoPokemons };
