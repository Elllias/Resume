import "./AboutMe.css";
import {useState} from "react";
import photoMain from "../../ui/images/photo-main.png";
import photoMask1 from "../../ui/images/photo-mask-1.png";
import photoMask2 from "../../ui/images/photo-mask-2.png";
import hhLogo from "../../ui/images/hh-logo.svg";

export const AboutMe = () => {
    const [currentPhoto, setCurrentPhoto] = useState(photoMain);

    const handleMouseEnter = () => {
        const randomPhoto = Math.random() > 0.5 ? photoMask1 : photoMask2;
        setCurrentPhoto(randomPhoto);
    };

    const handleMouseLeave = () => {
        setCurrentPhoto(photoMain);
    };

    return (
        <div className="AboutMe__container">
            <h2 className="AboutMe__header-text">Обо мне</h2>
            <div className="AboutMe__content-container">
                <div className="AboutMe__photo-container">
                    <img
                        className="AboutMe__photo"
                        src={currentPhoto}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                    <a
                        href="https://spb.hh.ru/resume/40f3d5c8ff09cf07790039ed1f5a704a4f5635"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img className="AboutMe__hh-logo" src={hhLogo}/>
                    </a>
                </div>
                <div className="AboutMe__text">
                    <p>
                        Изучаю подходы к проектированию архитектуры, чистый код, паттерны, современныеподходы и
                        технологии.
                        <br/><br/>
                        В работе ставлю на первое место качество кода (эффективность, читаемость, поддерживаемость,
                        багоустойчивость). Также считаю крайне важным соблюдение всех формальных и неформальных
                        дедлайнов. Люблю учиться и учить других заинтересованных людей.
                        <br/><br/>
                        В коллективе считаю важным поддерживать дружескую, но рабочую обстановку. Стараюсь решить все
                        локальные конфликты как можно быстрее. Ценю любую обратную связь и по запросу формирую ее для
                        других людей.
                    </p>
                </div>
            </div>
        </div>
    );
}
