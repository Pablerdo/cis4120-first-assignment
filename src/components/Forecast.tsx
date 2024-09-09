import '../styles/Forecast.css';
import { FaSun, FaCloudSun, FaCloudRain, FaCloud } from 'react-icons/fa'; // Import icons from React Icons

interface ForecastDay {
    day: string;
    hi: number;
    low: number;
    condition: string;
}

function Forecast() {
    const days: ForecastDay[] = [
        { day: 'Today', hi: 25, low: 17, condition: 'Cloudy' },
        { day: 'Tue', hi: 27, low: 16, condition: 'Sunny' },
        { day: 'Wed', hi: 23, low: 13, condition: 'Rainy' },
        { day: 'Thu', hi: 26, low: 14, condition: 'Partly Cloudy' },
        { day: 'Fri', hi: 29, low: 12, condition: 'Sunny' },
        { day: 'Sat', hi: 27, low: 13, condition: 'Rainy' },
        { day: 'Sun', hi: 28, low: 14, condition: 'Rainy' },
    ];

    // Function to render appropriate icon based on weather condition
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
            {days.map((dayData, index) => (
                <div className="forecast-day" key={index}>
                    <p className="day-name">{dayData.day}</p>
                    <div className="forecast-details">
                        {renderIcon(dayData.condition)}
                        <p>{dayData.low}°C</p>
                        <span className="temp-separator">|</span> {/* Vertical line */}
                        <p>{dayData.hi}°C</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Forecast;
