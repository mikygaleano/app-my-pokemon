

const PokemonContext = createContext();

const usePokemonContext = () => {
  return useContext(PokemonContext);
};

const PokemonProvider = ({ children }) => {



  return (
    <PokemonContext.Provider value={{
      
    }}>
      {children}
    </PokemonContext.Provider>
  );
};

export {
  usePokemonContext,
  PokemonProvider
}
