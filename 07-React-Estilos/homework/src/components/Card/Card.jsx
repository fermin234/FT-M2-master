import React from 'react';
import s from './Card.module.css'

export default function Card( {img, max, min, name, onClose} ) {
  // acá va tu código
  return(
      <div className={s.cardconteiner}>
        <div className={s.card}>
          <h2 >{name}</h2>
          <section className={s.temperaturas}>
            <ul>
              <li className={s.max}>Min</li>
              <li className={s.vmax}>{min}</li>
            </ul>
            <ul>
              <li className={s.max}>Max</li>
              <li className={s.vmax}>{max}</li>
            </ul>
            <img className={s.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Imagen_clima" />
          </section>

          <button className={s.btnclose} onClick={onClose}> X </button>
        </div>
      </div >
  )
};