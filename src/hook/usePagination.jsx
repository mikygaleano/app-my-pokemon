import { useState } from "react";

const usePagination = (allPokemons)=> {

    const [ currentPage, setCurrentPage ] = useState(20);



    const prev = ()=> {
      if (currentPage > 20) {
        setCurrentPage(prev => prev - 20)
      }
    };
  
    const next = ()=> {
      if (currentPage < allPokemons.length -1 ) {
        setCurrentPage(prev => prev + 20)
      }

    };

    return {
        currentPage,
        prev,
        next
    }


};

export {usePagination};