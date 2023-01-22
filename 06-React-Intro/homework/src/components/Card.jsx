import readerBar from 'henry-reader-bar/readerBar';
import React from 'react';

export default function Card(props) {
  // acá va tu código

  return (
    <>
      <h1> {props.name} </h1>
      <h3>MIN</h3>
      <h3> {props.min} </h3>
      <h3>MAX</h3>
      <h3> {props.max} </h3>

      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Logo-clima" />
      <button onClick={props.onClose}> X </button>
    </>
  )
};