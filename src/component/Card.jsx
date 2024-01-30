import React from 'react'
import { useWeather } from '../context/Weather';

function Card() {
  const WeatherReport = useWeather();

  const image = WeatherReport.data && WeatherReport.data.current && WeatherReport.data.current.condition.icon;
  const cityName = WeatherReport.data && WeatherReport.data.location && WeatherReport.data.location.name;
  const cityRegion = WeatherReport.data && WeatherReport.data.location && WeatherReport.data.location.region;
  const cityCountry = WeatherReport.data && WeatherReport.data.location && WeatherReport.data.location.country;
  const cityTemp = WeatherReport.data && WeatherReport.data.current && WeatherReport.data.current.temp_c;


  return (
    <div className='card'>
      {
        WeatherReport?.data ? (
          <>
            <img src={image} alt='image' />
            <h2>{cityTemp} C</h2>
            <h5>{cityName} ,{cityRegion},{cityCountry}</h5>
          </>
        ) :
          (
            <p></p>
          )
      }
    </div>
  )
}

export default Card