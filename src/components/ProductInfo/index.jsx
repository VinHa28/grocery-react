import React, { useState } from 'react'
import './ProductInfo.scss'
import { FormLabel, FormSelect } from '../Form'
import FormSelectGroup from '../Form/FormSelectGroup'
import FormTag from '../Form/FormTag'
import LikeButton from '../Button/LikeButton'
import Button from '../Button'
export default function ProductInfo({
    product={},
    className=''
}) {
    const [unitOfMeasure, setUnitOfMeasure] = useState('Gram')
    const [WeightOptions, setWeighOptions] = useState([500, 600, 700, 800]);
    return (
        <section className={`product-info ${className}`}>
            <h1 className="product-info__heading">{product?.name}</h1>
            <div className="product-info__row row">
                <div className="col-5 col-xl-12">
                    <div className="product-property">
                        <img src="./src/assets/icons/star.svg" alt="" className="product-property__icon" />
                        <h4 className="product-property__title">{product?.rating} ({product?.reviews.length} reviews) </h4>
                    </div>
                    <FormLabel className="form__label product-info__label" label={'Size/Weight'} />
                    <FormSelectGroup>
                        <FormSelect options={[500, 600, 700]} style={{ '--width': '140px', }} defaultValue='500' />
                        <FormSelect defaultValue='Gram' options={['Gram', 'Kilogram']} />
                    </FormSelectGroup>
                    <FormTag listTags={['Small', 'Medium', 'Large']} className='product-info__tags' tagClassName='product-info__tag' />
                </div>
                <div className="col-7 col-xl-12">
                    <div className="product-properties">
                        <div className="product-property">
                            <img src="./src/assets/icons/document-border.svg" alt="" className="product-property__icon icon" />
                            <h4 className="product-property__title">Compare</h4>
                        </div>
                        <div className="product-property">
                            <img src="./src/assets/icons/buy.svg" alt="" className="product-property__icon icon" />
                            <div>
                                <h4 className="product-property__title">Delivery</h4>
                                <p className="product-property__desc">From $6 for 1-3 days</p>
                            </div>
                        </div>
                        <div className="product-property">
                            <img src="./src/assets/icons/bag.svg" alt="" className="product-property__icon icon" />
                            <div>
                                <h4 className="product-property__title">Pickup</h4>
                                <p className="product-property__desc">Out of 2 store, today</p>
                            </div>
                        </div>

                        <div className="product-info__cart">
                            <div className="product-info__cart-row">
                                <p className="product-info__cart-price product-info__cart-price--smaller">
                                    $500.00
                                </p>
                                <span className="product-info__cart-tax">10%</span>
                            </div>
                            <p className="product-info__cart-total">
                                $540.00
                            </p>
                            <div className="product-info__cart-row">
                                <Button className="btn btn--primary product-info__cart-btn" content='Add to card'></Button>
                                <LikeButton className='product-info__like-btn' liked={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
