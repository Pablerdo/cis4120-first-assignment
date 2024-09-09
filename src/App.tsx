import './App.css';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { useState } from 'react';
import IPhoneFrame from "./components/IPhoneFrame";
import HourlyForecast from "./components/HourlyForecast";

function App() {
    const [city] = useState('Orlando');
    const [condition] = useState('7-day forecast');

    return (
        <IPhoneFrame>
            <Header city={city} />
            <div style={{fontSize: "25px", margin: "5px 10px 5px 10px"}}>
                Feels like: 13°C
            </div>
            <HourlyForecast />
            <div className="card">
                <CurrentWeather condition={condition} />
                <Forecast />
            </div>
        </IPhoneFrame>
    );
}

export default App;
