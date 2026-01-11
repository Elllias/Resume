import "./Experience.css";
import {ExperienceData} from "../../data/ExperienceData";
import {ExperienceRow} from "./experience-row/ExperienceRow";

export const Experience = ()=>{
    return (
        <div className="Experience__container">
            <h3 className="Experience__header">Опыт</h3>
            <div className="Experience__rows-container">
                {ExperienceData.map((experience, index) =>
                    <ExperienceRow key={index} {...experience}/>
                )}
            </div>
        </div>
    );
}
