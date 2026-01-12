import "./skills.css";
import {SkillsData} from "../../data/skills-data";
import {Skill} from "./skill/skill";
import {Section} from "../section/section";

export const Skills = () => {
    return (
        <Section className="Skills__background" id="skills">
            <div className="Skills__container">
                <h3 className="Skills__header">Навыки</h3>
                <div className="Skills__grid-container">
                    {SkillsData.map(skillData =>
                        <Skill key={skillData.name} {...skillData}/>
                    )}
                </div>
            </div>
        </Section>
    );
}

