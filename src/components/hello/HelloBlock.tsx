import './HelloBlock.css';
import heartImage from "../../ui/images/heart.svg";

export const HelloBlock = () => {
    return (
        <>
            <div className="HelloBlock__video-background">
                <video className="HelloBlock__video" autoPlay muted loop playsInline preload="auto">
                    <source src="/video/hello-background.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="HelloBlock__container">
                <div className="HelloBlock__text-block">
                    <p className="HelloBlock__base-text HelloBlock__top-text">
                        Я
                        <img src={heartImage} alt="💛"/>
                        Фронтенд
                    </p>
                    <p className="HelloBlock__base-text HelloBlock__middle-text">А ранее геймдев :)</p>
                    <p className="HelloBlock__base-text HelloBlock__low-text">© Волков Илья</p>
                </div>
            </div>
        </>
    );
}
