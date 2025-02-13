import React, {useState} from 'react'
import axios from 'axios'


const WeatherApp = () => {

    const[city, setCity] = useState('')
    const[weatherData, setWeatherData] = useState([])
    const[error, setError] = useState('')

    const apiKey = 'UdGO4dIuo49hkGXuW7LiXAaEFaJy6hZw'; // Replace with your OpenWeatherMap API key
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;
    const apiUrl = 'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=UdGO4dIuo49hkGXuW7LiXAaEFaJy6hZw&q='

    const getWeather = async () => {

        try{
            let responese = await axios.get(`${apiUrl}${city}`);
            console.log('4444444',responese );
            setWeatherData(responese.data)
            setError('')
        } catch(err) {
            setWeatherData('')
            setError(err)
        }
    }
    // console.log('weatherData', weatherData['location']['lat']);

    return(
        <div>
            <div>
                <input type='text' value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter a city' />
                <button onClick={getWeather}>Get the Weather</button>
            </div>
            <div>
                {error && <p>{error}</p>}
            </div>
                { weatherData &&  weatherData['location'] && (
                    <div>
                        <h2>{weatherData['location']?.lat}, {weatherData['location']?.lon}</h2>
                        {/* <p>Temperature: {weather.main.temp}°C</p>
                        <p>Weather: {weather.weather[0].description}</p> */}
                    </div>
                    
                )}
        </div>
    )
}

export default WeatherApp
