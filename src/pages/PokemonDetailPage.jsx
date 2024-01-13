import { useParams } from "react-router-dom";


const PokemonDetailPage = ({pokemonList}) => {

    const { id } = useParams();

    const pokemons = pokemonList.find(poke => poke.id === parseInt(id));


    return (
        <>
            <h3>Details</h3>
            <span>{pokemons.name}</span>
        </>
    )
};

export {PokemonDetailPage};