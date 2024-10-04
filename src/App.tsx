import './App.css';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { useState } from 'react';
import IPhoneFrame from "./components/IPhoneFrame";
import HourlyForecast from "./components/HourlyForecast";
import {FaCloud, FaCloudRain, FaCloudSun, FaSun} from "react-icons/fa";

import orlandoImage from './assets/orlando.jpeg';
import philadelphiaImage from './assets/philadelphiaImage2.jpeg';
import newyorkImage from './assets/newyorkImage.jpg';
import sanfranciscoImage from './assets/sanfranciscoImage2.jpg';

interface ForecastDay {
    day: string;
    hi: number;
    low: number;
    condition: string;
}

interface HourlyData {
    hour: string;
    temp: number;
    icon: JSX.Element;
}


function App() {
    const cities = ['Orlando', 'Philadelphia', 'New York', 'San Francisco'];

    const temps = [25, 24, 20, 23];
    const [currentCityIndex, setCurrentCityIndex] = useState(0);
    const [condition] = useState('7-day forecast');

    const [expandedHeaderIndex, setExpandedHeaderIndex] = useState<null | number>(null);

    const handleCityChange = (index: number) => {
        setCurrentCityIndex(index);
    };

    const handleHeaderClick = (index: number) => {
        setExpandedHeaderIndex(expandedHeaderIndex === index ? null : index);
    };

    const chooseFeelsLike = (index: number) => {
        switch (index) {
            case 0:
                return "Feels like 30°C";
            case 1:
                return "Feels like 25°C";
            case 2:
                return "Feels like 20°C";
            case 3:
                return "Feels like 15°C";
            default:
                return null;
        }
    };

    const daysOrlando: ForecastDay[] = [
        { day: 'Today', hi: 25, low: 17, condition: 'Rainy' },
        { day: 'Tue', hi: 27, low: 16, condition: 'Sunny' },
        { day: 'Wed', hi: 23, low: 13, condition: 'Rainy' },
        { day: 'Thu', hi: 26, low: 14, condition: 'Partly Cloudy' },
        { day: 'Fri', hi: 29, low: 12, condition: 'Sunny' },
        { day: 'Sat', hi: 27, low: 13, condition: 'Rainy' },
        { day: 'Sun', hi: 28, low: 14, condition: 'Rainy' },
    ];

    const daysPhiladelphia: ForecastDay[] = [
        { day: 'Today', hi: 20, low: 10, condition: 'Sunny' },
        { day: 'Tue', hi: 22, low: 11, condition: 'Sunny' },
        { day: 'Wed', hi: 18, low: 8, condition: 'Rainy' },
        { day: 'Thu', hi: 21, low: 9, condition: 'Partly Cloudy' },
        { day: 'Fri', hi: 24, low: 7, condition: 'Sunny' },
        { day: 'Sat', hi: 22, low: 8, condition: 'Rainy' },
        { day: 'Sun', hi: 23, low: 9, condition: 'Rainy' },
    ];

    const daysNewYork: ForecastDay[] = [
        { day: 'Today', hi: 15, low: 5, condition: 'Rainy' },
        { day: 'Tue', hi: 17, low: 6, condition: 'Rainy' },
        { day: 'Wed', hi: 13, low: 3, condition: 'Rainy' },
        { day: 'Thu', hi: 16, low: 4, condition: 'Partly Cloudy' },
        { day: 'Fri', hi: 19, low: 2, condition: 'Sunny' },
        { day: 'Sat', hi: 17, low: 3, condition: 'Rainy' },
        { day: 'Sun', hi: 18, low: 4, condition: 'Rainy' },
    ];

    const daysSanFrancisco: ForecastDay[] = [
        { day: 'Today', hi: 25, low: 18, condition: 'Partly Cloudy' },
        { day: 'Tue', hi: 23, low: 20, condition: 'Sunny' },
        { day: 'Wed', hi: 20, low: 15, condition: 'Rainy' },
        { day: 'Thu', hi: 21, low: 19, condition: 'Rainy' },
        { day: 'Fri', hi: 20, low: 27, condition: 'Sunny' },
        { day: 'Sat', hi: 19, low: 15, condition: 'Rainy' },
        { day: 'Sun', hi: 18, low: 11, condition: 'Rainy' },
    ];

    const weeks = [daysOrlando, daysPhiladelphia, daysNewYork, daysSanFrancisco];

    const orlandoHourlyData: HourlyData[] = [
        { hour: '12 AM', temp: 13, icon: <FaCloudRain /> },
        { hour: '1 AM', temp: 12, icon: <FaCloudRain /> },
        { hour: '2 AM', temp: 12, icon: <FaCloudRain /> },
        { hour: '3 AM', temp: 11, icon: <FaCloudRain /> },
        { hour: '4 AM', temp: 10, icon: <FaCloud /> },
        { hour: '5 AM', temp: 10, icon: <FaCloud /> },
        { hour: '6 AM', temp: 9, icon: <FaCloud /> },
        { hour: '7 AM', temp: 10, icon: <FaSun /> },
        { hour: '8 AM', temp: 11, icon: <FaSun /> },
        { hour: '9 AM', temp: 13, icon: <FaSun /> },
        { hour: '10 AM', temp: 15, icon: <FaSun /> },
        { hour: '11 AM', temp: 16, icon: <FaSun /> },
        { hour: '12 PM', temp: 18, icon: <FaSun /> },
    ];

    const philadelphiaHourlyData: HourlyData[] = [
        { hour: '12 AM', temp: 8, icon: <FaSun /> },
        { hour: '1 AM', temp: 7, icon: <FaSun /> },
        { hour: '2 AM', temp: 7, icon: <FaSun /> },
        { hour: '3 AM', temp: 6, icon: <FaSun /> },
        { hour: '4 AM', temp: 5, icon: <FaSun /> },
        { hour: '5 AM', temp: 5, icon: <FaCloud /> },
        { hour: '6 AM', temp: 4, icon: <FaCloud /> },
        { hour: '7 AM', temp: 5, icon: <FaSun /> },
        { hour: '8 AM', temp: 6, icon: <FaSun /> },
        { hour: '9 AM', temp: 8, icon: <FaSun /> },
        { hour: '10 AM', temp: 10, icon: <FaSun /> },
        { hour: '11 AM', temp: 11, icon: <FaSun /> },
        { hour: '12 PM', temp: 13, icon: <FaSun /> },
    ];

    const newYorkHourlyData: HourlyData[] = [
        { hour: '12 AM', temp: 3, icon: <FaCloudRain /> },
        { hour: '1 AM', temp: 2, icon: <FaCloud /> },
        { hour: '2 AM', temp: 2, icon: <FaCloudRain /> },
        { hour: '3 AM', temp: 1, icon: <FaCloudRain /> },
        { hour: '4 AM', temp: 0, icon: <FaCloud /> },
        { hour: '5 AM', temp: 0, icon: <FaCloud /> },
        { hour: '6 AM', temp: -1, icon: <FaCloud /> },
        { hour: '7 AM', temp: 0, icon: <FaSun /> },
        { hour: '8 AM', temp: 1, icon: <FaSun /> },
        { hour: '9 AM', temp: 3, icon: <FaSun /> },
        { hour: '10 AM', temp: 5, icon: <FaSun /> },
        { hour: '11 AM', temp: 6, icon: <FaSun /> },
        { hour: '12 PM', temp: 8, icon: <FaSun /> },
    ];

    const sanFranciscoHourlyData: HourlyData[] = [
        { hour: '12 AM', temp: 23, icon: <FaSun /> },
        { hour: '1 AM', temp: 24, icon: <FaSun /> },
        { hour: '2 AM', temp: 23, icon: <FaSun /> },
        { hour: '3 AM', temp: 24, icon: <FaSun /> },
        { hour: '4 AM', temp: 23, icon: <FaCloudSun /> },
        { hour: '5 AM', temp: 22, icon: <FaCloudSun /> },
        { hour: '6 AM', temp: 20, icon: <FaCloud /> },
        { hour: '7 AM', temp: 18, icon: <FaSun /> },
        { hour: '8 AM', temp: 17, icon: <FaSun /> },
        { hour: '9 AM', temp: 15, icon: <FaSun /> },
        { hour: '10 AM', temp: 13, icon: <FaSun /> },
        { hour: '11 AM', temp: 12, icon: <FaSun /> },
        { hour: '12 PM', temp: 11, icon: <FaSun /> },
    ];

    const hours = [orlandoHourlyData, philadelphiaHourlyData, newYorkHourlyData, sanFranciscoHourlyData];

    const cityImages = [orlandoImage, philadelphiaImage, newyorkImage, sanfranciscoImage];

    return (
        <IPhoneFrame currentCityIndex={currentCityIndex} onCityChange={handleCityChange}>
            {[0, 1, 2, 3].map((index) => (
                <div key={index} style={{ width: expandedHeaderIndex === index ? '100%' : '25%' }}>
                    <Header
                        city={cities[index]}
                        temp={temps[index]}
                        expanded={expandedHeaderIndex === index}
                        onClick={() => handleHeaderClick(index)}
                        backgroundImage={cityImages[index]} // Pass the corresponding image for each city
                    />
                    {expandedHeaderIndex !== index && (
                        <>
                            <div style={{fontSize: "25px", margin: "5px 10px 5px 10px"}}>
                                {chooseFeelsLike(index)}
                            </div>
                            <HourlyForecast hours={hours[index]} />
                            <div className="card">
                                <CurrentWeather condition={condition} />
                                <Forecast days={weeks[index]}/>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </IPhoneFrame>
    );
}

export default App;
