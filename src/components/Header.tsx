import '../styles/Header.css';

interface HeaderProps {
    city: string;
}

function Header({ city }: HeaderProps) {
    return (
        <header className="header">
            <header className="cityTemp">
                <h2>{city}</h2>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                    <h1 style={{fontSize: 50}}>15&deg;C</h1>
                    <h1 style={{fontSize: 20}}>/ 59&deg;F</h1>
                </div>
            </header>
            <div className="fadeDiv">
            </div>
        </header>
    );
}

export default Header;
