import React from 'react';
import Card from '../Card/Card';
import s from './Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return(
    <div className={s.cards}>  
      {props.cities.map((e) => {
        return(
          <Card 
            id={e.id}  
            name={e.name}
            max={e.main.temp_max}
            min={e.main.temp_min}
            img={e.weather[0].icon}
          />
        )
      })}
    </div>
  )
};