import { useEffect, useState } from 'react'
import editSvg from 'assets/icons/edit.svg';
import Button from '../Button'
import NewAddressModal from '../Modals/NewAddressModal';

import './AddressCard.scss'

export default function AddressCard(props) {
    /** Data Props */
    const { receiver, address, className, selected = false } = props;

    /** Component States */
    const [checked, setChecked] = useState(selected)
    const [open, setOpen] = useState(false);

    return (
        <article className={`address-card ${className}`} >
            <div className="address-card__left" >
                <div className="address-card__choose">
                    <label className="address-card__checkbox" onClick={() => setChecked(!checked)}>
                        <input type="checkbox" className="address-card__checkbox-input" checked={checked} onChange={() => { }} />
                    </label>
                </div>
                <div className="address-card__info">
                    <h3 className="address-card__title">{receiver}</h3>
                    <p className="address-card__desc">
                        {address}
                    </p>
                    <ul className="address-card__list">
                        <li>Shipping</li>
                        <li>Delivery from store</li>
                    </ul>
                </div>
            </div>
            <div className="address-card__right">
                <div className="address-card__control">
                    <Button className="btn--text address-card__btn" onClick={() => setOpen(true)}>
                        <img src={editSvg} alt="" className="address-card__btn-icon icon" />
                        Edit
                    </Button>
                </div>
            </div>

            <NewAddressModal open={open} setOpen={setOpen} />
        </article>
    )
}
