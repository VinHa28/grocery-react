import { Form, FormInput } from "components/Form";
import { Link, useNavigate } from "react-router-dom";
import Logo from "components/Logo";
import Button from "components/Button";
import MailIcon from "assets/icons/mail.svg";
import LockIcon from "assets/icons/lock.svg";
import ForgotPasswordImg from "img/auth/forgot-password.webp";

import "./Auth.scss";

export default function ResetPassword() {
    const navigate = useNavigate();
    return (
        <main className="auth">
            <div className="auth__intro d-md-none">
                <img
                    src={ForgotPasswordImg}
                    alt=""
                    className="auth__intro-img"
                />
            </div>
            <div className="auth__content">
                <div className="auth__content-inner">
                    <Logo />

                    <h1 className="auth__heading">Forgot Password?</h1>
                    <p className="auth__desc auth__desc-sign-in">
                        You can reset your password here.
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
                        <div className="form__group auth__btn-group">
                            <Button
                                type="submit"
                                className="btn--primary auth__btn form__submit-btn"
                            >
                                Reset Password
                            </Button>
                        </div>
                    </Form>

                    <div className="auth__row">
                        <Link
                            to="/login"
                            className="auth__link auth__link--larger"
                        >
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
