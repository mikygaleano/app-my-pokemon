
import { Cards } from "../component/Cards";
import { Header } from "../component/Header";


const PokemonPage = ({
  type, 
  search, 
  pokemonsList, 
  filterPokemons, 
  handleInput, 
  handleSubmit, 
  handleTypeChange,
  types,
  paginationAllPokemons,
  paginationFilter})=> {
  

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
};



export {PokemonPage};
