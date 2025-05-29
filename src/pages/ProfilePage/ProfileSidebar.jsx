import React from 'react'
import './ProfilePage.scss'
import { Link } from 'react-router-dom'

export default function ProfileSidebar({
    user,
}) {
    return (
        <aside className="profile__sidebar">
            <div className="profile-user">
                <img src={user.avatar} alt="" className="profile-user__avatar"/>
                    <h1 className="profile-user__name">{`${user?.firstName} ${user?.lastName}`}</h1>
                    <p className="profile-user__desc">Registered: 28th December 2024</p>
            </div>

            <div className="profile__sidebar-bottom">
                <div className="profile-menu">
                    <h3 className="profile-menu__title">Manage Account</h3>
                    <ul className="profile-menu__list">
                        <li className="profile-menu__item">
                            <Link to='#!' className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img src="../src/assets/icons/person.svg" alt="" className="icon"/>
                                </span>
                                Personal info
                            </Link>
                        </li>
                        <li className="profile-menu__item">
                            <Link to='#!' className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img src="../src/assets/icons/address.svg" alt="" className="icon"/>
                                </span>
                                Addresses
                            </Link>
                        </li>
                        <li className="profile-menu__item">
                            <Link to='#!' className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img src="../src/assets/icons/mail-comucation.svg" alt="" className="icon"/>
                                </span>
                                Communications & privacy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="profile-menu">
                    <h3 className="profile-menu__title">My items</h3>
                    <ul className="profile-menu__list">
                        <li className="profile-menu__item">
                            <Link to='#!' className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img src="../src/assets/icons/recording.svg" alt="" className="icon"/>
                                </span>
                                Reorder
                            </Link>
                        </li>
                        <li className="profile-menu__item">
                            <Link to='#!' className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img src="../src/assets/icons/heart.svg" alt="" className="icon"/>
                                </span>
                                Lists
                            </Link>
                        </li>
                        <li className="profile-menu__item">
                            <Link to='#!' className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img src="../src/assets/icons/gift.svg" alt="" className="icon"/>
                                </span>
                                Registries
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="profile-menu">
                    <h3 className="profile-menu__title">Subscriptions & plans</h3>
                    <ul className="profile-menu__list">
                        <li className="profile-menu__item">
                            <Link to='#!' className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img src="../src/assets/icons/protection.svg" alt="" className="icon"/>
                                </span>
                                Protection plans
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="profile-menu">
                    <h3 className="profile-menu__title">Customer Service</h3>
                    <ul className="profile-menu__list">
                        <li className="profile-menu__item">
                            <Link to='#!' className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img src="../src/assets/icons/warning.svg" alt="" className="icon"/>
                                </span>
                                Help
                            </Link>
                        </li>
                        <li className="profile-menu__item">
                            <Link to='#!' className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img src="../src/assets/icons/warning-rounded.svg" alt="" className="icon"/>
                                </span>
                                Terms of Use
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
