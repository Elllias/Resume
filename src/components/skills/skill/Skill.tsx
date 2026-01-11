import "./Skill.css";

type SkillProps = {
    name: string,
    description: string,
    logoUrl: string
};

export const Skill = ({name, description, logoUrl}: SkillProps) => {
    return (
        <div className="Skill__container">
            <img className="Skill__img" src={logoUrl}/>
            <div className="Skill__info-container">
                <span className="Skill__name">{name}</span>
                <span className="Skill__description">{description}</span>
            </div>
        </div>
    );
}
