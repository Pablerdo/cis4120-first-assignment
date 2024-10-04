import '../styles/Header.css';

interface HeaderProps {
    city: string;
    temp: number;
    expanded: boolean;
    onClick: () => void;
    backgroundImage: string;
}

function Header({ city, temp, expanded, onClick, backgroundImage }: HeaderProps) {
    const fahrTemp = Math.round((temp * 9/5) + 32);
    return (
        <header
            className={`header ${expanded ? 'expanded' : ''}`}
            onClick={onClick}
            style={{
                backgroundImage: `url(${backgroundImage})`, // Set background image
            }}
        >
            <header className="cityTemp">
                <h2>{city}</h2>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                    <h1 style={{fontSize: expanded ? 80 : 50}}>{temp}&deg;C</h1>
                    <h1 style={{fontSize: expanded ? 40 : 20}}>/ {fahrTemp}&deg;F</h1>
                </div>
            </header>
            <div className="fadeDiv"></div>
        </header>
    );
}

export default Header;

