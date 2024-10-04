// Footer.tsx
import '../styles/Footer.css';

interface FooterProps {
    currentCityIndex: number;
    onCityChange: (index: number) => void;
}

function Footer({ currentCityIndex, onCityChange }: FooterProps) {
    return (
        <div className="iphone-footer">
            {[0, 1, 2, 3].map((index) => (
                <div
                    key={index}
                    className={`footer-dot ${currentCityIndex === index ? 'active' : ''}`}
                    onClick={() => onCityChange(index)}
                ></div>
            ))}
        </div>
    );
}

export default Footer;