import React from 'react';
import './app.css';
import {HelloBlock} from "./components/hello/hello-block";
import {AboutMe} from "./components/about-me/about-me";
import {Skills} from "./components/skills/skills";
import {Offer} from "./components/offer/offer";
import {Experience} from "./components/experience/experience";
import {Footer} from "./components/footer/footer";
import {Header} from './components/header/header';

function App() {
    return (
        <>
            <Header/>
            <HelloBlock/>
            <AboutMe/>
            <Skills/>
            <Offer/>
            <Experience/>
            <Footer/>
        </>
    );
}

export default App;