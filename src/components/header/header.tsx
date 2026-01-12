import "./header.css";
import {useState, useEffect} from "react";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`Header__container ${isScrolled ? "scrolled" : ""}`}>
            <span className="Header__header-text">Хочу в Яндекс</span>
            <nav>
                <button onClick={() => scrollToSection('about')}>Обо мне</button>
                <button onClick={() => scrollToSection('skills')}>Навыки</button>
                <button onClick={() => scrollToSection('experience')}>Опыт</button>
            </nav>
        </header>
    );
};