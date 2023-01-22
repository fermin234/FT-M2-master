import React from 'react';
import img from '../../logoHenry.png';
import SearchBar from '../SearchBar/SearchBar.jsx';
import s from './Nav.module.css';

function Nav({ onSearch }) {
  return (
    <div className={s.navbar}>
      <div className={s.logo_texto}>
        <img className={s.logo_henry} src={img} alt="logo-henry" />
        <p className={s.texto_navbar}>Henry - Weather App</p>
      </div>
      <div className={s.searchbar}>
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  );
};

export default Nav;
