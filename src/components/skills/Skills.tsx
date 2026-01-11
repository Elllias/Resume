import "./Skills.css";
import {SkillsData} from "../../data/SkillsData";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className="Skills__container">
            <h3 className="Skills__header">Навыки</h3>
            <div className="Skills__grid-container">
                {SkillsData.map(skillData =>
                    <Skill key={skillData.name} {...skillData}/>
                )}
            </div>
        </div>
    );
}

