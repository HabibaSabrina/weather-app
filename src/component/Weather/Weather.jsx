import React, { useState } from 'react';
import "./style.css"
import WeatherDetails from '../WeatherDetails/WeatherDetails';
const Weather = () => {
    const [weather, setWeather] = useState([])

    const handleWeather = event => {
        event.preventDefault();
        // form values
        const form = event.target;
        const city = form.city.value;
        const degree = form.degree.value;
        console.log(degree)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.API_KEY}&units=${degree}`)
            .then(res => res.json())
            .then(data => setWeather(data))

    }
    console.log(weather)
    return (
        <div className='bg-weather pb-20 pt-36'>
            <h1 className='text-3xl font-bold text-white text-center py-10'>Weather App</h1>
            <form className='w-1/2 mx-auto' onSubmit={handleWeather} action="">
                <div className='justify-center flex gap-10'>
                    <input className='border-2 border-orange-700 w-96 p-3 rounded-xl' placeholder='Enter a location or ZIP code' name='city' type="text" />
                    <select className='border-2 border-orange-700 p-3 rounded-xl' name='degree'>
                        <option name='degree' value="metric">Celsius</option>
                        <option name='degree' value="imperial">Fahrenheit</option>
                    </select>
                </div>
                <div className='text-center my-5'>
                    <button className='bg-orange-700 text-white p-3 px-10 rounded-xl font-semibold'>Get Weather</button>
                </div>
            </form>
            {weather ? <WeatherDetails weather={weather}></WeatherDetails> : <div><h1>no data</h1></div>}
            

        </div>
    );
};

export default Weather;