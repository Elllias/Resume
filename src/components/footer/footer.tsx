import "./footer.css";
import githubLogo from "../../ui/images/github-logo.png";
import vkLogo from "../../ui/images/vk-logo.png";
import telegramLogo from "../../ui/images/telegram-logo.png";
import {Section} from "../section/section";

export const Footer = () => {
    const socialLinks = {
        github: "https://github.com/Elllias", // замените на ваш GitHub
        vk: "https://vk.com/elias312", // замените на ваш VK
        telegram: "https://t.me/Elllllias" // уже есть в вашем коде
    };

    return (
        <Section className="Footer__background">
            <footer className="Footer__container">
                <a
                    className="Footer__base-text"
                    href={socialLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Связаться с автором
                </a>
                <div className="Footer__contacts-container">
                    <span className="Footer__base-text">Волков Илья, фронтендер</span>
                    <div className="Footer__links-container">
                        <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub профиль"
                        >
                            <img src={githubLogo} alt="GitHub"/>
                        </a>
                        <a
                            href={socialLinks.vk}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="VK профиль"
                        >
                            <img src={vkLogo} alt="VK"/>
                        </a>
                        <a
                            href={socialLinks.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram профиль"
                        >
                            <img src={telegramLogo} alt="Telegram"/>
                        </a>
                    </div>
                </div>
            </footer>
        </Section>
    );
}
