import Logo from "components/Logo";
import Button from "components/Button";
import FaceBookIcon from "assets/icons/facebook.svg";
import YoutobeIcon from "assets/icons/youtobe.svg";
import TiktokIcon from "assets/icons/tiktok.svg";
import XIcon from "assets/icons/x.svg";
import LinkInIcon from "assets/icons/linkin.svg";

import "./Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner container">
                <div className="footer__row">
                    {/* Footer Column 1 */}
                    <div className="footer__col">
                        <Logo className="footer__logo" />
                        <p className="footer__desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Sunt alias quam, qui quis quisquam corporis!
                        </p>
                        <p className="footer__desc">
                            Receive product news and updates.
                        </p>
                        <form action="" className="footer__form">
                            <input
                                type="email"
                                name=""
                                id=""
                                className="footer__input"
                                placeholder="Email address"
                            />
                            <Button className="btn--primary footer__btn">
                                SEND
                            </Button>
                        </form>
                    </div>
                    {/* Footer Column 2 */}
                    <div className="footer__col">
                        <h3 className="footer__heading">SHOP</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    Al Departments
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    Fashion Deals
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    Electronics Discounts
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    Home & Living Specials
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    Beauty Bargains
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Footer Column 3 */}
                    <div className="footer__col">
                        <h3 className="footer__heading">SUPPORT</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    Store Location
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    Order Status
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Footer Column 4 */}
                    <div className="footer__col">
                        <h3 className="footer__heading">COMPANY</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    Customer Services
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    Terms of Use
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    Privacy
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    Careers
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    About
                                </a>
                            </li>
                            <li className="footer__item">
                                <a href="#!" className="footer__link">
                                    Affiliates
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Footer Column 5 */}
                    <div className="footer__col">
                        <h3 className="footer__heading">CONTACT</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <p className="footer__label">Email</p>
                                <a
                                    href="mailto:contact@grocerymart.com"
                                    className="footer__link"
                                >
                                    contact@grocerymart.com
                                </a>
                            </li>
                            <li className="footer__item">
                                <p className="footer__label">Hotline</p>
                                <a
                                    href="tel:0981228204"
                                    className="footer__link"
                                >
                                    {" "}
                                    0981228204{" "}
                                </a>
                            </li>
                            <li className="footer__item">
                                <p className="footer__label">Address</p>
                                <p className="footer__desc">
                                    No. 480, to Mau Street, Lai Cach Village,
                                    Xuan Giang Commune, Soc Son, Hanoi
                                </p>
                            </li>
                            <li className="footer__item">
                                <p className="footer__label">Hours</p>
                                <p className="footer__desc">
                                    M - F 08:00am - 06:00pm
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © 2010 - 2025 Grocery Mart. All rights reserved.
                    </p>
                    <div className="footer__social">
                        <a
                            href="https://www.facebook.com/"
                            className="footer__social-link footer__social-link--facebook"
                            target="_blank"
                        >
                            <img
                                src={FaceBookIcon}
                                alt=""
                                className="footer__social-img"
                            />
                        </a>
                        <a
                            href="https://www.youtube.com/"
                            className="footer__social-link footer__social-link--youtobe"
                            target="_blank"
                        >
                            <img
                                src={YoutobeIcon}
                                alt=""
                                className="footer__social-img"
                            />
                        </a>
                        <a
                            href="https://www.tiktok.com/"
                            className="footer__social-link footer__social-link--tiktok"
                            target="_blank"
                        >
                            <img
                                src={TiktokIcon}
                                alt=""
                                className="footer__social-img"
                            />
                        </a>
                        <a
                            href="https://x.com/"
                            className="footer__social-link footer__social-link--x"
                            target="_blank"
                        >
                            <img
                                src={XIcon}
                                alt=""
                                className="footer__social-img"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            className="footer__social-link footer__social-link--linkedin"
                            target="_blank"
                        >
                            <img
                                src={LinkInIcon}
                                alt=""
                                className="footer__social-img"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
