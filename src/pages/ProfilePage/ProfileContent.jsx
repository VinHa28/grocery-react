import React, { use } from 'react'
import './ProfilePage.scss'
import PaymentCard from '../../components/PaymentCard'
import AccountInfo from '../../components/AccountInfo'
import Button from '../../components/Button'

import FavoriteItem from '../../components/FavoriteItem'
import { dataSrc } from '../../data/DataSource'

export default function ProfileContent({
    user,
}) {
    return (
        <div className="row gy-3 gy-md-2">
            {/* Wallet */}
            <div className="col-12">
                <h2 className="profile-info__heading">My Wallet</h2>
                <p className="profile-info__desc">Payment methods</p>
                <div className="row row-cols-3 row-cols-xl-2 row-cols-lg-1 gy-md-2">
                    {user?.cards.map((card) => (
                        <div className="col" key={card.id}>
                            <PaymentCard
                                cardHolder={card.cardHolder}
                                expired={card.expired}
                                number={card.number}
                                type={card.type}
                                bgColor={card.bgColor}
                                img={card.img}
                            />
                        </div>
                    ))}

                    <div className="col">
                        <a href="#" className="new-card">
                            <img src="../src/assets/icons/plus.svg" alt="" className="new-card__icon icon" />
                            <p className="new-card__text">Add New Card</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* Information */}
            <div className="col-12">

                <h2 className="profile-info__heading">Account info</h2>
                <p className="profile-info__desc">Addresses, contact information and password</p>

                <div className="row row-cols-2 g-3 row-cols-xl-1 gy-md-2">
                    <div className="col">
                        <a href="#!">
                            <AccountInfo title='Email address' desc={user?.email} icon='../src/assets/icons/mail-comucation.svg'/>
                        </a>
                    </div>
                    <div className="col">
                        <a href="#!">
                            <AccountInfo icon='../src/assets/icons/phone.svg' title='Phone number' desc={user?.phoneNumber} />
                        </a>
                    </div>
                    <div className="col">
                        <AccountInfo title='Address' desc={user?.address} icon='../src/assets/icons/address.svg' />
                    </div>
                </div>

            </div>

            <div className="col-12">
                <h2 className="profile-info__heading">Lists</h2>
                <p className="profile-info__desc">{user?.favoriteList.length} items - Primary</p>

                {user?.favoriteList.map(item => (
                    <FavoriteItem key={item.id} price={item.price} shortDesc={item.shortDesc} title={item.title} img={item.img}></FavoriteItem>
                ))}
            </div>
        </div>
    )
}
