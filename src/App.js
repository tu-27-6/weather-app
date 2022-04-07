import React, {useState} from 'react'
import './style.css'




export default function App() {
    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')

    const apiKey = 'd6742feb87031d6e10bb0ad16da1bbea'

    const getWeather = (e) => {
        if(e.key === 'Enter') {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setCity('')
                })
        }
    }

    return (
        <div className='app'>
            <div className='container'>
                <h1>Weather App</h1>
                <input 
                    type='text'
                    placeholder='Search a city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyPress={getWeather}
                />

            {
                typeof weather.main != 'undefined' ? 
                (
                    <div className='weather-container'>
                        <div className='location'>
                            {weather.name}, {weather.sys.country}
                        </div>

                        <div className='temp'>
                            {Math.round(weather.main.temp)}°C
                        </div>

                        <div className='weather'>
                            {weather.weather[0].main}
                        </div>
                    </div>
                )
                :
                (
                    <div className='weather-container'>

                    </div>
                )
            }

            </div>
        </div>
    )
}