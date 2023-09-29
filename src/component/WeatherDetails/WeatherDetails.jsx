import React from 'react';

const WeatherDetails = ({weather}) => {
    
  if (!weather) {
    return <div className='text-white md:w-1/2 text-xl bg-black p-10 bg-opacity-70 mx-auto my-20 text-center'>No weather data available.</div>;
  }
  if(weather.cod == '404'){
    return <div className='text-white md:w-1/2 text-xl bg-black p-10 bg-opacity-70 mx-auto my-20 text-center'>
        <p className='mb-3'>{weather.message}</p> 
    <p>Please enter a Valid location or zip</p>
    </div>;
  }
  
  if (!weather.main) {
    return <div className='text-white md:w-1/2 text-xl bg-black p-10 bg-opacity-70 mx-auto my-20 text-center'>Please Enter a valid location</div>;
  }

 
  const temperature = weather.main.temp;
  const humidity = weather.main.humidity;
  const speed = weather.wind.speed;
  const description = weather.weather[0].description
 
    return (
        <div className='text-white md:w-1/2 bg-black p-10 bg-opacity-70 mx-auto my-20'>
        <p className='text-3xl font-semibold pb-10 text-center'>{weather.name}</p>
        <table className='w-96 text-xl font-semibold mx-auto'>
          <tbody>
            <tr>
              <td className='pb-5'>Temperature:</td>
              
              <td className='pb-5'>{temperature} &deg;C</td>
            </tr>
            <tr>
              <td className='pb-5'>Humidity:</td>
              <td className='pb-5'>{humidity}%</td>
            </tr>
            <tr>
              <td className='pb-5'>Wind Speed:</td>
              <td className='pb-5'>{speed}</td>
            </tr>
            <tr>
              <td className='pb-5'>Weather Description:</td>
              <td className='pb-5'>{description}</td>
            </tr>
          </tbody>
        </table>
        
      </div>
    );
};

export default WeatherDetails;