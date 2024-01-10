import { useState, useEffect } from "react";



const useFetchAllPokemons = (url)=> {


    const [ allPokemons, setAllPokemons ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError] = useState(null);

    useEffect(()=> {

        const fetchDate = async ()=> {
            try {
                const res = await fetch(url);
                
                if (res.ok) {
                    const date = await res.json();
                    setAllPokemons(date.results);
                } else {
                    throw new 'Error al hacer el fetch de datos'
                }
            } catch (error) {
                setError(error.menssage)
            } finally {
                setLoading(false)
            }
        }; 
        fetchDate();
    }, [url]);



    return {
        allPokemons,
        loading,
        error
    }


};

export {useFetchAllPokemons};