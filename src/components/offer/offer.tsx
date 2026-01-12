import "./offer.css";
import offerHeart from "../../ui/images/offer-heart.png";
import {Section} from "../section/section";

export const Offer = () => {
    return (
        <Section className="Offer__background">
            <div className="Offer__offer-container">
                <span className="Offer__offer-text">Очень жду оффер, ведь Я
                    <img className="Offer__heart-image" src={offerHeart}/>
                    Фронтенд
                </span>
            </div>
        </Section>
    )
}
