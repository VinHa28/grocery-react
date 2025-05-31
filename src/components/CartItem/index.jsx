import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import ConfirmModal from "../Modals/ConfirmModal";
import MinusIcon from "assets/icons/minus.svg";
import PlusIcon from "assets/icons/plus.svg";
import HeartIcon from "assets/icons/heart.svg";
import RedHeartIcon from "assets/icons/red-heart.svg";
import TrashIcon from "assets/icons/trash.svg";

import "./CartItem.scss";

export default function CartItem(props) {
    const {
        title,
        price,
        inStock = true,
        isFavored = true,
        brand,
        initialQuantity = 1,
        img,
        hasCheckBox = false,
    } = props;

    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(initialQuantity);
    const [liked, setLiked] = useState(isFavored);

    const handleChangeLiked = () => {
        setLiked(!liked);
    };

    return (
        <article className="cart-item">
            {hasCheckBox && (
                <div className="cart-info__check-all">
                    <label className="address-card__checkbox">
                        <input
                            type="checkbox"
                            className="address-card__checkbox-input"
                            checked
                            onChange={() => {}}
                        />
                    </label>
                </div>
            )}
            <Link to="/detail">
                <img src={img} alt="" className="cart-item__thumb" />
            </Link>
            <div className="cart-item__content">
                <div className="cart-item__content-left">
                    <h3 className="cart-item__title">
                        <Link to="/detail">{title}</Link>
                    </h3>
                    <p className="cart-item__price-wrap">
                        ${price} |{" "}
                        <span className="cart-item__status">In Stock</span>
                    </p>
                    <div className="cart-item__input-wrap">
                        <div className="cart-item__input">{brand}</div>
                        <div className="cart-item__input">
                            <button
                                className="cart-item__input-btn"
                                onClick={() => {
                                    if (quantity > 1) setQuantity(quantity - 1);
                                    else return;
                                }}
                            >
                                <img src={MinusIcon} alt="" className="icon" />
                            </button>
                            {quantity}
                            <button
                                className="cart-item__input-btn"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                <img
                                    src={PlusIcon}
                                    alt=""
                                    className="icon"
                                />
                            </button>
                        </div>

                        {hasCheckBox && (
                            <div className="cart-item__control">
                                {!liked ? (
                                    <Button
                                        className="cart-item__btn btn--text btn"
                                        onClick={handleChangeLiked}
                                    >
                                        <img
                                            src={HeartIcon}
                                            alt=""
                                            className="cart-item__btn-icon"
                                        />
                                        Save
                                    </Button>
                                ) : (
                                    <Button
                                        className="cart-item__btn btn--text btn"
                                        onClick={handleChangeLiked}
                                    >
                                        <img
                                            src={RedHeartIcon}
                                            alt=""
                                            className="cart-item__btn-icon--red"
                                        />
                                        Save
                                    </Button>
                                )}
                                <Button
                                    className="cart-item__btn btn--text"
                                    onClick={() => setOpen(true)}
                                >
                                    <img
                                        src={TrashIcon}
                                        alt=""
                                        className="cart-item__btn-icon"
                                    />
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="cart-item__content-right">
                    <p className="cart-item__total">${price}</p>

                    {hasCheckBox ? (
                        <div className="cart-item__control">
                            <Link to="/checkout">
                                <Button className="btn--primary btn--rounded cart-item__btn">
                                    Check Out
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="cart-item__control">
                            {!liked ? (
                                <Button
                                    className="cart-item__btn btn--text btn"
                                    onClick={handleChangeLiked}
                                >
                                    <img
                                        src={HeartIcon}
                                        alt=""
                                        className="cart-item__btn-icon"
                                    />
                                    Save
                                </Button>
                            ) : (
                                <Button
                                    className="cart-item__btn btn--text btn"
                                    onClick={handleChangeLiked}
                                >
                                    <img
                                        src={RedHeartIcon}
                                        alt=""
                                        className="cart-item__btn-icon--red"
                                    />
                                    Save
                                </Button>
                            )}
                            <Button
                                className="cart-item__btn btn--text"
                                onClick={() => setOpen(true)}
                            >
                                <img
                                    src={TrashIcon}
                                    alt=""
                                    className="cart-item__btn-icon"
                                />
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <ConfirmModal
                open={open}
                setOpen={setOpen}
                message="Are you sure you want to delete?"
            />
        </article>
    );
}
