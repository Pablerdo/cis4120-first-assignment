import '../styles/Forecast.css';
import { FaSun, FaCloudSun, FaCloudRain, FaCloud } from 'react-icons/fa';

interface ForecastDay {
    day: string;
    hi: number;
    low: number;
    condition: string;
}

interface ForecastProps {
    days: ForecastDay[];
}

function Forecast({days}: ForecastProps) {
    const renderIcon = (condition: string) => {
        switch (condition) {
            case 'Sunny':
                return <FaSun/>;
            case 'Cloudy':
                return <FaCloud />;
            case 'Rainy':
                return <FaCloudRain />;
            case 'Partly Cloudy':
                return <FaCloudSun />;
            default:
                return null;
        }
    };

    return (
        <div className="forecast">
            {days.map((dayData: ForecastDay, index: number) => (
                <div className="forecast-day" key={index}>
                    <p className="day-name">{dayData.day}</p>
                    <div className="forecast-details">
                        {renderIcon(dayData.condition)}
                        <p>{dayData.low}°C</p>
                        <span className="temp-separator">|</span>
                        <p>{dayData.hi}°C</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Forecast;
