import { Link } from "react-router-dom";
import PersonIcon from "assets/icons/person.svg";
import AddressIcon from "assets/icons/address.svg";
import MailCommunicationIcon from "assets/icons/mail-comucation.svg";
import RecordingIcon from "assets/icons/recording.svg";
import HeartIcon from "assets/icons/heart.svg";
import GiftIcon from "assets/icons/gift.svg";
import ProtectionIcon from "assets/icons/protection.svg";
import WarningIcon from "assets/icons/warning.svg";
import WarningRoundIcon from "assets/icons/warning-rounded.svg";

import "./ProfilePage.scss";

export default function ProfileSidebar({ user }) {
    return (
        <aside className="profile__sidebar">
            <div className="profile-user">
                <img
                    src={user.avatar}
                    alt=""
                    className="profile-user__avatar"
                />
                <h1 className="profile-user__name">{`${user?.firstName} ${user?.lastName}`}</h1>
                <p className="profile-user__desc">
                    Registered: 28th December 2024
                </p>
            </div>

            <div className="profile__sidebar-bottom">
                <div className="profile-menu">
                    <h3 className="profile-menu__title">Manage Account</h3>
                    <ul className="profile-menu__list">
                        <li className="profile-menu__item">
                            <Link to="#!" className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img
                                        src={PersonIcon}
                                        alt=""
                                        className="icon"
                                    />
                                </span>
                                Personal info
                            </Link>
                        </li>
                        <li className="profile-menu__item">
                            <Link to="#!" className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img
                                        src={AddressIcon}
                                        alt=""
                                        className="icon"
                                    />
                                </span>
                                Addresses
                            </Link>
                        </li>
                        <li className="profile-menu__item">
                            <Link to="#!" className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img
                                        src={MailCommunicationIcon}
                                        alt=""
                                        className="icon"
                                    />
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
                            <Link to="#!" className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img
                                        src={RecordingIcon}
                                        alt=""
                                        className="icon"
                                    />
                                </span>
                                Reorder
                            </Link>
                        </li>
                        <li className="profile-menu__item">
                            <Link to="#!" className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img
                                        src={HeartIcon}
                                        alt=""
                                        className="icon"
                                    />
                                </span>
                                Lists
                            </Link>
                        </li>
                        <li className="profile-menu__item">
                            <Link to="#!" className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img
                                        src={GiftIcon}
                                        alt=""
                                        className="icon"
                                    />
                                </span>
                                Registries
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="profile-menu">
                    <h3 className="profile-menu__title">
                        Subscriptions & plans
                    </h3>
                    <ul className="profile-menu__list">
                        <li className="profile-menu__item">
                            <Link to="#!" className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img
                                        src={ProtectionIcon}
                                        alt=""
                                        className="icon"
                                    />
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
                            <Link to="#!" className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img
                                        src={WarningIcon}
                                        alt=""
                                        className="icon"
                                    />
                                </span>
                                Help
                            </Link>
                        </li>
                        <li className="profile-menu__item">
                            <Link to="#!" className="profile-menu__link">
                                <span className="profile-menu__link-icon">
                                    <img
                                        src={WarningRoundIcon}
                                        alt=""
                                        className="icon"
                                    />
                                </span>
                                Terms of Use
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}
