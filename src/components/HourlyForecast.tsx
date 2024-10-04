import '../styles/HourlyForecast.css';

interface HourlyData {
    hour: string;
    temp: number;
    icon: JSX.Element;
}

interface HourlyForecastProps {
    hourlyData: HourlyData[];
}

function HourlyForecast({ hours }: HourlyForecastProps) {
    return (
        <div className="hourly-forecast">
            {hours.map((data, index) => (
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
