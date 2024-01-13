import { useState, useEffect } from "react";

const useFilterPokemons = (lista, search, type)=> {

    const [ filterPokemons, setFilterPokemons ] = useState([]);

    useEffect(()=> {

        const asynFilter = async ()=> {

            if (search) {
                const currentFilter = await lista.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
                setFilterPokemons(currentFilter)
            }
            else if (type === 'all') {
                const currentFilter = await lista;
                setFilterPokemons(currentFilter)
            } else if (type) {
                const currentFilter = await lista.filter(pokemon => pokemon.types === type)
                setFilterPokemons(currentFilter);
            } else {
                const currentFilter = await lista;
                setFilterPokemons(currentFilter)
            }
            
            
        };

        asynFilter();

    }, [lista, search, type]);

    return {
        filterPokemons
    }


};

export {useFilterPokemons};