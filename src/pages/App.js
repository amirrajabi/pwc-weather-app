import React, { useState, useEffect } from 'react';
import { Paper, CircularProgress, Typography } from '@material-ui/core';

import GetWeather from '../utils/getWeather';
import TodayWeather from '../components/TodayWeather';
import TodayWeatherDetails from '../components/TodayWeatherDetails';
import WeekDays from '../components/WeekDays';
import SearchCity from '../components/SearchCity';

import { useStyles } from './App.styles';

function App() {
  const getWeather = new GetWeather();
  const [loadingData, setLoadingData] = useState(true);
  const [newLoadingData, setNewLoadingData] = useState(false);
  const [city, setCity] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [icon, setIcon] = useState('');
  const [temperature, setTemperature] = useState();
  const [precipIntensity, setPrecipIntensity] = useState();
  const [humidity, setHumidity] = useState();
  const [wind, setWind] = useState();
  const [visibility, setVisibility] = useState();
  const [days, setDays] = useState();
  const [error, setError] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    handleSearch(city);
  }, [city]);

  function handleSearch(city) {
    if (currentCity !== city) {
      setNewLoadingData(true);
      setCurrentCity(city);
    }
    getWeather.fetch(city).then(() => {
      if (getWeather.data === undefined) {
        setError(true);
        setNewLoadingData(false);
      } else {
        const { city } = getWeather.data;
        const { data } = getWeather.data.daily;
        const {
          temperature,
          icon,
          precipIntensity,
          humidity,
          windSpeed,
          visibility,
        } = getWeather.data.currently;
        setCity(city);
        setTemperature(temperature);
        setIcon(icon);
        setPrecipIntensity(precipIntensity);
        setHumidity(humidity);
        setWind(windSpeed);
        setVisibility(visibility);
        setDays(data);
        setLoadingData(false);
        setNewLoadingData(false);
        setError(false);
      }
    });
  }

  return (
    <Paper className={classes.root}>
      {loadingData ? (
        <div className={classes.loader}>
          <CircularProgress color='secondary' />
          <Typography gutterBottom variant='h5' component='h5'>
            Loading data ...
          </Typography>
        </div>
      ) : (
        <div className={classes.app}>
          <div className={classes.todayWeather}>
            <section>
              <SearchCity
                handleSearch={handleSearch}
                newLoadingData={newLoadingData}
              />
              {error && (
                <Typography
                  color='secondary'
                  gutterBottom
                  display='block'
                  variant='button'
                >
                  This city does not exist.
                </Typography>
              )}
              <TodayWeather city={city} temperature={temperature} icon={icon} />
              <TodayWeatherDetails
                precipIntensity={precipIntensity}
                humidity={humidity}
                wind={wind}
                visibility={visibility}
              />
            </section>
          </div>
          <WeekDays days={days} />
        </div>
      )}
    </Paper>
  );
}

export default App;
