import '../styles/HourlyForecast.css';
import { FaSun, FaCloudRain, FaCloud } from 'react-icons/fa'; // Import icons from React Icons

interface HourlyData {
    hour: string;
    temp: number;
    icon: JSX.Element;
}

function HourlyForecast() {
    const hourlyData: HourlyData[] = [
        { hour: '12 AM', temp: 13, icon: <FaCloud /> },
        { hour: '1 AM', temp: 12, icon: <FaCloud /> },
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

    return (
        <div className="hourly-forecast">
            {hourlyData.map((data, index) => (
                <div className="hourly-item" key={index}>
                    <p>{data.hour}</p>
                    <div className="icon-container">{data.icon}</div>
                    <p>{data.temp}°C</p>
                </div>
            ))}
        </div>
    );
}

export default HourlyForecast;
