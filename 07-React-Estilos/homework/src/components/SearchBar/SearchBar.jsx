import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
  return(
    <div className={s.searchbar}>
      <input className={s.input} type="text" placeholder='Ciudad..' />
      <button className={s.boton}> Agregar </button>
    </div >
  )
};