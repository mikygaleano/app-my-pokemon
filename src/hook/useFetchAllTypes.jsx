import { useEffect, useState } from "react"

const useFetchAllTypes = (url)=> {

    const [ types, setTypes ] = useState([]);

    useEffect(()=> {

        const fetchTypes = async ()=> {

            try {
                const res = await fetch(url);

                if (res.ok) {
                    const date = await res.json();
                    setTypes(date.results);
                } else {
                    throw new Error('Hubo un error en el fetch de datos')
                }
            } catch (error) {   
                console.error(error.message)
            }
        };

        fetchTypes();
    }, [url]);

    return {types}
};

export {useFetchAllTypes};