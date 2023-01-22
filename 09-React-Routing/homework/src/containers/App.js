import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';
import { Switch, Route } from 'react-router-dom';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          
          // setCities(oldCities => [...oldCities, ciudad]);
          console.log('recurso ',recurso.id)
          console.log('antes ',cities)
          cities.includes(recurso.id) ? console.log('ciudad existente') 
          : setCities(oldCities => [...oldCities, ciudad], () => console.log('agregado ',cities))

        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">
      <Route path='/'>
        <Nav onSearch={onSearch}/>
      </Route>
      <Switch>
        <Route exact path='/'>
          <Cards cities={cities} onClose={onClose} />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/ciudad/:ciudadId'>
          {({match}) => <Ciudad city={onFilter(match.params.ciudadId)} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
