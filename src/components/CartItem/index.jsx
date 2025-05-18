import React, { useState } from 'react'
import './CartItem.scss'
import LikeButton from '../Button/LikeButton';
import Button from '../Button';
import { Link } from 'react-router-dom';

export default function CartItem({
  title = '',
  price = '',
  inStock = true,
  isFavored = true,
  brand = '',
  initialQuantity = 1,
  img = '',

}) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [liked, setLiked] = useState(isFavored);

  const handleChangeLiked = () => {
    setLiked(!liked);
  }
  console.log(liked)
  return (
    <article className="cart-item">
      <Link to="/detail">
        <img src={img} alt="" className="cart-item__thumb" />
      </Link>
      <div className="cart-item__content">
        <div className="cart-item__content-left">
          <h3 className="cart-item__title">
            <Link to="/detail">{title}</Link>
          </h3>
          <p className="cart-item__price-wrap">
            ${price} | <span className="cart-item__status">In Stock</span>
          </p>
          <div className="cart-item__input-wrap">
            <div className="cart-item__input">
              {brand}
            </div>
            <div className="cart-item__input">
              <button className="cart-item__input-btn" onClick={() => {
                if (quantity > 1) setQuantity(quantity - 1)
                else return;
              }}>
                <img src="./src/assets/icons/minus.svg" alt="" className="icon" />
              </button>
              {quantity}
              <button className="cart-item__input-btn" onClick={() => setQuantity(quantity + 1)}>
                <img src="./src/assets/icons/plus.svg" alt="" className="icon" />
              </button>
            </div>
          </div>
        </div>
        <div className="cart-item__content-right">
          <p className="cart-item__total">$47.00</p>
          <div className="cart-item__control">
            {!liked ? (
              <Button liked={isFavored} className='cart-item__btn btn--text btn' onClick={handleChangeLiked}>
                <img src="./src/assets/icons/heart.svg" alt="" className="cart-item__btn-icon" />
                Save
              </Button>) :
              (<Button liked={isFavored} className='cart-item__btn btn--text btn' onClick={handleChangeLiked}>
                <img src="./src/assets/icons/red-heart.svg" alt="" className="cart-item__btn-icon--red" />
                Save
              </Button>)}
            <button className="cart-item__btn btn btn--text js-toggle" toggle-target="#delete-confirm">
              <img src="./src/assets/icons/trash.svg" alt="" className="cart-item__btn-icon" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
