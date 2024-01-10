import { useState } from "react";
import { useFetchAllPokemons } from "../hook/useFetchAllPokemons";
import { useFetchInfoPokemons } from "../hook/useFetchInfoPokemons";
import { URL, typesUrl } from "../const/const";
import { useFilterPokemons } from "../hook/useFilterPokemons";
import { usePagination } from "../hook/usePagination";
import { useFetchAllTypes } from "../hook/useFetchAllTypes";
import { Cards } from "../component/Cards";
import { Header } from "../component/Header";


const PokemonPage = ()=> {
  
  const [ search, setSearch ] = useState('');
  const [ type, setType ] = useState('');
  const { allPokemons, error } = useFetchAllPokemons(URL);
  const { pokemonsList } = useFetchInfoPokemons(allPokemons);
  const { types } = useFetchAllTypes(typesUrl);
  const { filterPokemons } = useFilterPokemons(pokemonsList, search, type)
  const paginationFilter = usePagination(filterPokemons);
  const paginationAllPokemons = usePagination(pokemonsList);

  const handleInput = (e)=> {
    const { value } = e.target;
    setSearch(value)
    setType('')
  };

  const handleSubmit = (e)=> {
    e.preventDefault();
    setType('');
  }

  const handleTypeChange = (e)=> {

    const { value } = e.target;
    if (value === 'all') {
      setType('all')
    }
    setType(value)
    setSearch('')
  }



  return (
    <>
    <Header 
        handleInput={handleInput} 
        handleSubmit={handleSubmit} 
        handleTypeChange={handleTypeChange}
        types={types}
        type={type}
        search={search} />
    <section className="w-full min-h-screen">
      <h1>Pokémon App</h1>
      <Cards 
        search={search} 
        type={type} 
        filterPokemons={filterPokemons} 
        pokemonsList={pokemonsList} 
        paginationAllPokemons={paginationAllPokemons}
        paginationFilter={paginationFilter}/>
    </section>
    </>
  );
}

export {PokemonPage};
