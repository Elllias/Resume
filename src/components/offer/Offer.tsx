import "./Offer.css";
import offerHeart from "../../ui/images/offer-heart.png";

export const Offer = () => {
    return (
        <div className="Offer__offer-container">
            <span className="Offer__offer-text">Очень жду оффер, ведь Я
                <img className="Offer__heart-image" src={offerHeart}/>
                Фронтенд
            </span>
        </div>
    )
}
