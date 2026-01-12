import "./about-me.css";
import {useState} from "react";
import photoMain from "../../ui/images/photo-main.png";
import photoMask1 from "../../ui/images/photo-mask-1.png";
import photoMask2 from "../../ui/images/photo-mask-2.png";
import hhLogo from "../../ui/images/hh-logo.svg";
import {Section} from "../section/section";

export const AboutMe = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const handleMouseEnter = () => {
        setCurrentPhotoIndex(Math.random() > 0.5 ? 0 : 1);
    };

    return (
        <Section className="AboutMe__background" id="about">
            <div className="AboutMe__container">
                <h2 className="AboutMe__header-text">Обо мне</h2>
                <div className="AboutMe__content-container">
                    <div className="AboutMe__photo-container">
                        <img
                            className="AboutMe__photo"
                            src={photoMain}
                        />
                        <img
                            className="AboutMe__photo AboutMe__photoMask"
                            src={currentPhotoIndex === 0 ? photoMask1 : photoMask2}
                            onMouseEnter={handleMouseEnter}
                        />
                        <a
                            href="https://spb.hh.ru/resume/40f3d5c8ff09cf07790039ed1f5a704a4f5635"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="AboutMe__hh-logo" src={hhLogo}/>
                        </a>
                    </div>
                    <p className="AboutMe__text">
                        Изучаю подходы к проектированию архитектуры, чистый код, паттерны, современные подходы и
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
        </Section>
    );
}
