import './App.css';
import React, { useState, useEffect } from 'react';

import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import { getPlaceData } from './api';


function App() {
  const [places, setPlaces] = useState([]);
  const [coords,setCoords] = useState({});
  const [bounds,setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude,longitude}}) => {
      setCoords({lat: latitude, lng:longitude});
    });
  }, []);

  useEffect(() => {
    // it's a async function so you have to use .then on it
    try{
      getPlaceData(bounds.sw, bounds.ne)
      .then((data) => {
        console.log(data);
        setPlaces(data);
      })}catch(error){
        console.log(error);
      }
  }, [coords, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={2} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
              setCoords={setCoords}
              setBounds={setBounds}
              coords={coords}
              places={places}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
