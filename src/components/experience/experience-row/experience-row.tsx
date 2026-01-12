import "./experience-row.css";
import arrowDown from "../../../ui/images/arrow-down.svg";
import {pluralize} from "../../../utils/pluralize";
import {useState} from "react";

type ExperienceRowProps = {
    startDate: Date,
    endDate?: Date,
    company: string,
    career: string,
    description: string
}

enum MonthName {
    "Янв.",
    "Фев.",
    "Март",
    "Апр.",
    "Май",
    "Июнь",
    "Июль",
    "Авг.",
    "Сен.",
    "Окт.",
    "Ноя.",
    "Дек."
}

export const ExperienceRow = ({startDate, endDate, company, career, description}: ExperienceRowProps) => {
    const [isOpened, setIsOpened] = useState(false);

    const onClick = () => {
        setIsOpened(!isOpened);
    };

    return (
        <div className={`ExperienceRow__container ${isOpened ? "opened" : ""}`}>
            <div className="ExperienceRow__row-container" onClick={onClick}>
                <div className="ExperienceRow__dates-container">
                <span className="Experience__dates">
                    {getFormattedDate(startDate)} - {endDate ? getFormattedDate(endDate) : "Сейчас"}
                </span>
                    <span className="Experience__duration">
                    {getDuration(startDate, endDate ? endDate : new Date(Date.now()))}
                </span>
                </div>
                <div className="ExperienceRow__career-container">
                <span className="ExperienceRow__company-text">
                    {company}
                </span>
                <span className="ExperienceRow__dot">
                    ·
                </span>
                <span className="ExperienceRow__career-text">
                    {career}
                </span>
                </div>
                <img className={`ExperienceRow__arrow ${isOpened ? "opened" : ""}`} src={arrowDown}/>
            </div>
            <div className={`ExperienceRow__description-container ${isOpened ? "opened" : ""}
            
            `}>
                <span className="ExperienceRow__career-description">{description}</span>
            </div>
        </div>
    );
}

const getFormattedDate = (date: Date) => {
    const year = date.getFullYear();
    const monthName = MonthName[date.getMonth()];

    return `${monthName} ${year}`;
}

const getDuration = (startDate: Date, endDate: Date): string => {
    const yearsDelay = endDate.getFullYear() - startDate.getFullYear();
    const monthsDelay = endDate.getMonth() - startDate.getMonth() + 1;

    let totalMonthsDelay = yearsDelay * 12 + monthsDelay;

    if (totalMonthsDelay < 12) {
        const monthWord = pluralize(totalMonthsDelay, ['месяц', 'месяца', 'месяцев']);
        return `${totalMonthsDelay} ${monthWord}`;
    }

    const yearsCount = Math.floor(totalMonthsDelay / 12);
    const remainingMonths = totalMonthsDelay % 12;

    const yearWord = pluralize(yearsCount, ['год', 'года', 'лет']);
    let result = `${yearsCount} ${yearWord}`;

    if (remainingMonths > 0) {
        const monthWord = pluralize(remainingMonths, ['месяц', 'месяца', 'месяцев']);
        result += ` ${remainingMonths} ${monthWord}`;
    }

    return result;
}