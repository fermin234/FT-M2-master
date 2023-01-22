import React, { useState } from "react";
import s from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className={s.searchBar} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        className={s.input}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={s.agregar} type="submit" value="Agregar" />
    </form>
  );
}
