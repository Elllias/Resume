import React from 'react';
import './App.css';
import {HelloBlock} from "./components/hello/HelloBlock";
import {AboutMe} from "./components/about-me/AboutMe";
import {Skills} from "./components/skills/Skills";
import {Offer} from "./components/offer/Offer";
import {Experience} from "./components/experience/Experience";
import {Footer} from "./components/footer/Footer";
import {Header} from './components/header/Header';

function App() {
    return (
        <>
            <Header/>
            <div className="App__section HelloBlock__background">
                <div className="App__content-container">
                    <HelloBlock/>
                </div>
            </div>
            <section id="about" className="App__section AboutMe__background">
                <div className="App__content-container">
                    <AboutMe/>
                </div>
            </section>
            <section id="skills" className="App__section Skills__background">
                <div className="App__content-container">
                    <Skills/>
                </div>
            </section>
            <div className="App__section Offer__background">
                <div className="App__content-container">
                    <Offer/>
                </div>
            </div>
            <section id="experience" className="App__section Experience__background">
                <div className="App__content-container">
                    <Experience/>
                </div>
            </section>
            <div className="App__section Footer__background">
                <div className="App__content-container">
                    <Footer/>
                </div>
            </div>
        </>
    );
}

export default App;