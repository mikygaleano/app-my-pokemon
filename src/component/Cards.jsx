import { ButtonPage } from "./ButtonPage";

const Cards = (
    {
    search, type, filterPokemons,
    pokemonsList, paginationFilter,
    paginationAllPokemons}
    )=> {


    if (pokemonsList.length < 1 || filterPokemons.length < 1) return <h3>loading...</h3>


    return (
        <div className="w-full h-full">
        
                {
                !search && !type ? (
                    <div className="w-full h-full grid gap-5">
                        <div className="w-full h-full flex flex-row justify-center gap-2 flex-wrap">
                        {pokemonsList.map(pokemon => (
                        <div 
                            className="w-56 h-96 flex flex-col gap-2" 
                            key={pokemon.id}>
                            <figure className="w-full h-3/4">
                                <img 
                                    className="object-cover"
                                    src={pokemon.image} alt={pokemon.name} />
                            </figure>    
                            <div className="w-full h-fit flex flex-col gap-2">
                                <span>{pokemon.name}</span>
                                <span>{pokemon.types}</span>
                            </div>
                        </div>
                        )).slice(paginationAllPokemons.currentPage - 20, paginationAllPokemons.currentPage)}
                    </div>
                    <ButtonPage next={paginationAllPokemons.next} 
                                prev={paginationAllPokemons.prev} />
                    </div>
                ) : filterPokemons.length > 0 ? (
                  <div className="w-full h-full grid gap-5">
                    <div className="w-full h-full flex flex-row justify-center gap-2 flex-wrap">
                    {filterPokemons.map(pokemon => (
                        <div
                            className="w-56 h-96 flex flex-col gap-2" 
                            key={pokemon.id}>
                            <figure className="w-full h-3/4">
                                <img 
                                    className="object-cover"
                                    src={pokemon.image} alt={pokemon.name} />
                            </figure>
                            <div className="w-full h-fit flex flex-col gap-2">
                                <span>{pokemon.name}</span>
                                <span>{pokemon.types}</span>
                            </div>
                        </div>
                        )).slice(paginationFilter.currentPage - 20, paginationFilter.currentPage)
                    }
                    </div>
                    <ButtonPage next={paginationFilter.next}
                                prev={paginationFilter.prev} />
                  </div>
                ) :
                (
                    <div>
                    <span>No se encontraron pokemons</span>
                    {error && <span>: {error}</span>}
                    </div>
                )}  
        </div>
    )
};

export {Cards};