import '../styles/IPhoneFrame.css';

interface IPhoneFrameProps {
    children: React.ReactNode;
}

function IPhoneFrame({ children }: IPhoneFrameProps) {
    return (
        <div className="iphone">
            <div className="notch">
                <div className="notch-camera"></div>
                <div className="notch-speaker"></div>
            </div>
            <div className="iphone-screen">{children}</div>
        </div>
    );
}

export default IPhoneFrame;


