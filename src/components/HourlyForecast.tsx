import '../styles/HourlyForecast.css';

interface HourlyData {
    hour: string;
    temp: number;
    icon: JSX.Element;
}

interface HourlyForecastProps {
    hours: HourlyData[];
}

function HourlyForecast({ hours }: HourlyForecastProps) {
    return (
        <div className="hourly-forecast">
            {hours.map((data: HourlyData, index: number) => (
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
