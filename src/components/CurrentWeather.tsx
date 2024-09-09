import '../styles/CurrentWeather.css';

interface CurrentWeatherProps {
    condition: string;
}

function CurrentWeather({ condition }: CurrentWeatherProps) {

    return (
        <div className="current-weather">
            {condition}
        </div>
    );
}

export default CurrentWeather;
