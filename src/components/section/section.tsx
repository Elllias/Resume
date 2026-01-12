import "./section.css";
import {ReactNode} from "react";

export const Section = ({children, className, id}: {
    children: ReactNode;
    className: string;
    id?: string;
}) => {
    return (
        <section className={`Section__container ${className}`} id={id}>
            <div className="Section__content-container">
                {children}
            </div>
        </section>
    )
}