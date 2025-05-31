import GiftIcon from "assets/icons/gift.svg";
import "./GiftItem.scss";

export default function GiftItem({ title = "", content = "" }) {
    return (
        <article className="gift-item">
            <div className="gift-item__icon-wrap">
                <img src={GiftIcon} alt="" className="gift-item__icon" />
            </div>
            <div className="gift-item__content">
                <h3 className="gift-item__title">{title}</h3>
                <p className="gift-item__desc">{content}</p>
            </div>
        </article>
    );
}
