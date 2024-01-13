import { HashRouter, Route, Routes } from "react-router-dom";
import { useFetchAllPokemons } from "./hook/useFetchAllPokemons";
import { useFetchInfoPokemons } from "./hook/useFetchInfoPokemons";
import {PokemonPage} from "./pages/PokemonPage";
import { PokemonDetailPage } from "./pages/PokemonDetailPage";
import { URL } from "./const/const";

const App = () => {

  const { allPokemons, error } = useFetchAllPokemons(URL);
  const { pokemonsList } = useFetchInfoPokemons(allPokemons);

  return (
    <>
      <HashRouter>
          <Routes>
              <Route  path="/" element={
                <PokemonPage />}/>
              <Route path="/pokemons/detail/:id/" element={
                <PokemonDetailPage pokemonList={pokemonsList}/>
              } />
          </Routes>
      </HashRouter>
    </>
  );
};

export default App;
