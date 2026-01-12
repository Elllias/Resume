import "./experience.css";
import {ExperienceData} from "../../data/experience-data";
import {ExperienceRow} from "./experience-row/experience-row";
import {Section} from "../section/section";

export const Experience = () => {
    return (
        <Section className="Experience__background" id="experience">
            <div className="Experience__container">
                <h3 className="Experience__header">Опыт</h3>
                <div className="Experience__rows-container">
                    {ExperienceData.map((experience, index) =>
                        <ExperienceRow key={index} {...experience}/>
                    )}
                </div>
            </div>
        </Section>
    );
}
