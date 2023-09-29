
import { useEffect, useState } from 'react'
import './App.css'
import Weather from './component/Weather/Weather'

function App() {
  
  return (
    <div >
      <Weather></Weather>
      
     
      {/* {
        weather || <div className='text-white w-1/2 bg-black p-10 bg-opacity-70 mx-auto my-20'>
        <p className='text-3xl font-semibold pb-10 text-center'>{weather.name}</p>
        <table className='w-96 text-xl font-semibold mx-auto'>
          <tbody>
            <tr>
              <td className='pb-5'>Temperature:</td>
              
              <td className='pb-5'>{weather.main.temp}&deg;C</td>
            </tr>
            <tr>
              <td className='pb-5'>Humidity:</td>
              <td className='pb-5'>{weather.main.humidity}%</td>
            </tr>
            <tr>
              <td className='pb-5'>Wind Speed:</td>
              <td className='pb-5'>{weather.wind.speed}%</td>
            </tr>
            <tr>
              <td className='pb-5'>Weather Description:</td>
              <td className='pb-5'>{weather.weather[0].description}</td>
            </tr>
          </tbody>
        </table>
        
      </div>
      } */}
     
    </div>
  )
}

export default App
