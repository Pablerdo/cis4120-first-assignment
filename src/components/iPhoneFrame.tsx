import '../styles/IPhoneFrame.css';
import Footer from "./Footer";

interface IPhoneFrameProps {
    children: React.ReactNode;
    currentCityIndex: number;
    onCityChange: (index: number) => void;
}

function IPhoneFrame({ children, currentCityIndex, onCityChange }: IPhoneFrameProps) {
    return (
        <div className="iphone">
            <div className="notch">
                <div className="notch-camera"></div>
                <div className="notch-speaker"></div>
            </div>
            <div className="screen-wrapper">
                <div className="iphone-screen-footer scrollable-content" style={{ position: 'relative', display: 'flex', width: '400%', transform: `translateX(-${currentCityIndex * 25}%)`, transition: 'transform 0.5s ease-in-out' }}>
                    {children}
                </div>
                <Footer currentCityIndex={currentCityIndex} onCityChange={onCityChange} />
            </div>
        </div>
    );
}

export default IPhoneFrame;


