import AirPlaneIcon from "img/card/air-plane.svg";
import PlaneIcon from "assets/icons/plane.svg";

import "./PaymentCard.scss";

export default function PaymentCard(props) {
    const {
        img = AirPlaneIcon,
        bgColor = "#1E2E69",
        type,
        number,
        cardHolder,
        expired,
    } = props;
    return (
        <article
            className="payment-card"
            style={{ "--background-color": bgColor }}
        >
            <img src={img} alt="" className="payment-card__img" />
            <div className="payment-card__top">
                <img src={PlaneIcon} alt="" />
                <span className="payment-card__type">{type}</span>
            </div>

            <p className="payment-card__number">{number}</p>

            <div className="payment-card__bottom">
                <div>
                    <p className="payment-card__label">Card Holder</p>
                    <p className="payment-card__value">{cardHolder}</p>
                </div>
                <div className="payment-card__expired">
                    <p className="payment-card__label">Expired</p>
                    <p className="payment-card__value">{expired}</p>
                </div>
                <div className="payment-card__circles"></div>
            </div>
        </article>
    );
}
