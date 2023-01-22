import React, { useState } from "react";


export default function SearchBar({ onSearch }) {

  const [ciudadABuscar, setCiudadABuscar] = useState('');

  function onHandleInputChange(e){
    e.preventDefault();
    setCiudadABuscar(e.target.value);
  };

  function onSubmitForm(e){
    e.preventDefault();
    onSearch(ciudadABuscar);
  };

  return (
    <form onSubmit={(e) => {onSubmitForm(e)}}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={ e => onHandleInputChange(e)}
      />
      <input type="submit" value="Agregar"/>
    </form>
  );
}
