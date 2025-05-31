import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormCheckbox, FormInput } from "components/Form";
import Logo from "components/Logo";
import Button from "components/Button";
import IntroArrowImg from "img/auth/intro-arrow.svg";
import MailIcon from "assets/icons/mail.svg";
import LockIcon from "assets/icons/lock.svg";
import GoogleIcon from "assets/icons/google.svg";
import IntroImg from "img/auth/intro.svg";

import "./Auth.scss";

export default function SignUpPage() {
    const navigate = useNavigate();
    const [isOpenContent, setIsOpenContent] = useState(false);
    return (
        <main className="auth">
            <div className="auth__intro">
                <Logo className="d-none d-md-flex auth__intro-logo" />
                <img src={IntroImg} alt="" className="auth__intro-img" />
                <p className="auth__intro-text">
                    The best of luxury brand values, high quality products, and
                    innovative services
                </p>
                <button
                    className="auth__intro-next d-none d-md-block"
                    onClick={() => setIsOpenContent(true)}
                >
                    <img src={IntroArrowImg} alt="" />
                </button>
            </div>
            <div
                className={`auth__content ${isOpenContent ? "show" : "hide"}`}
                id="auth-content"
            >
                <div className="auth__content-inner">
                    <Logo />
                    <h1 className="auth__heading">Sign Up</h1>
                    <p className="auth__desc">
                        Let's create your account and Shop like a pro and save
                        money.
                    </p>
                    <Form onSubmit={() => navigate("/")} className="auth__form">
                        <FormInput
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            hasIcon={true}
                            icon={MailIcon}
                            require={true}
                            errMessage="The email is incorrect format!"
                        />

                        <FormInput
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            hasIcon={true}
                            icon={LockIcon}
                            require={true}
                            minLength="6"
                            errMessage="Password must be at least 6 characters!"
                        />

                        <FormInput
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            hasIcon={true}
                            icon={LockIcon}
                            require={true}
                            minLength="6"
                            errMessage="Re-enter incorrect password!"
                        />

                        <div className="form__group form__row">
                            <FormCheckbox label={"Set as default"} />
                        </div>

                        <div className="form__group auth__btn-group">
                            <Button
                                type="submit"
                                className="btn--primary auth__btn form__submit-btn"
                            >
                                Sign Up
                            </Button>
                            <Button
                                type="button"
                                className="btn btn--outline auth__btn auth__btn--outline"
                            >
                                <img
                                    src={GoogleIcon}
                                    alt=""
                                    className="btn__icon"
                                />
                                Sign in with Gmail
                            </Button>
                        </div>
                    </Form>

                    <div className="auth__row">
                        <p className="auth__text">You have an account yet?</p>
                        <Link
                            to="/login"
                            className="auth__link auth__link--larger"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
