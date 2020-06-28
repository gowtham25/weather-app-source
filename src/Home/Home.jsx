import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Home = ({ getWeatherDetails, ...props }) => {
    const [cityName, setCityName] = useState('London');
    let history = useHistory();

    const getWeather = () => {
        getWeatherDetails(cityName)
            .then(data => {
                history.push("/Graph");
                // navigate to Graph page when weather API call is done
            })
    }

    return (
        <div className='weather-home-container'>
            <input type='text' onChange={(e) => setCityName(e.target.value)} placeholder='Enter a city name' />
            <button onClick={() => getWeather()}>Get the forecast</button>
        </div>

    )
}

export default Home;