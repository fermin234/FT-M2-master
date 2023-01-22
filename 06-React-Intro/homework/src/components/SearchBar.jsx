import React from 'react';

export default function SearchBar( {onSearch} ) {
  // acá va tu código
  return(
    <>
      <input type="text" />
      <button onClick={() => onSearch("Bogota") }> Agregar </button>
    </>
  )
};