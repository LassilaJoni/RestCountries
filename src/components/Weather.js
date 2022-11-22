import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Weather = ({country}) => {

    const api_key = 'ae0f36d9196d33d6a617cbc29fa3fc1d';

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${api_key}`)
          .then(response => {
              setWeather(response.data);
        })
    }, [country.capital, api_key, setWeather]);

    if(!weather) {
        return null;
    }

    return(
        <>
        <h3>Weather in {weather.name}</h3>
        <p>Temperature: {weather.main.temp} Celsius</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='icon'/>
        <p>Wind: {weather.wind.speed} m/s</p>
        </>
    );
}

export default Weather;