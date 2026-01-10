import './HelloBlock.css';
import heartImage from "../../ui/images/heart.svg";

export function HelloBlock() {
    return (
        <>
            <div className="video-background">
                <video autoPlay muted loop className="video" playsInline preload="auto">
                    <source src="/video/hello-background.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="container">
                <TextContainer/>
            </div>
        </>
    );
}

function TextContainer() {
    return (
        <div className="text-block">
            <p className="base-text top-text">Я
                <img src={heartImage} alt="💛"/>
                Фронтенд
            </p>
            <p className="base-text middle-text">А ранее геймдев :)</p>
            <p className="base-text low-text">© Волков Илья</p>
        </div>
    );
}