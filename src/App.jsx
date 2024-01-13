import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useFetchAllPokemons } from "./hook/useFetchAllPokemons";
import { useFetchInfoPokemons } from "./hook/useFetchInfoPokemons";
import {useFetchAllTypes} from "./hook/useFetchAllTypes"
import {PokemonPage} from "./pages/PokemonPage";
import { PokemonDetailPage } from "./pages/PokemonDetailPage";
import { URL, typesUrl } from "./const/const";
import { useFilterPokemons } from "./hook/useFilterPokemons";
import { usePagination } from "./hook/usePagination";

const App = () => {

  const [ type, setType ] = useState('');
  const [ search, setSearch ] = useState('');
  const { allPokemons, error } = useFetchAllPokemons(URL);
  const { pokemonsList } = useFetchInfoPokemons(allPokemons);
  const { filterPokemons } = useFilterPokemons(pokemonsList, search, type);
  const { types } = useFetchAllTypes(typesUrl);
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
      <HashRouter>
          <Routes>
              <Route  path="/" element={
                <PokemonPage 
                  type={type} 
                  search={search} 
                  pokemonsList={pokemonsList} 
                  filterPokemons={filterPokemons} 
                  handleInput={handleInput} 
                  handleSubmit={handleSubmit} 
                  handleTypeChange={handleTypeChange}
                  types={types}
                  paginationAllPokemons={paginationAllPokemons}
                  paginationFilter={paginationFilter}/>}/>
              <Route path="/pokemons/detail/:id/" element={
                <PokemonDetailPage pokemonList={pokemonsList}/>} />
          </Routes>
      </HashRouter>
    </>
  );
};

export default App;
