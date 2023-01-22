import React from "react";
import Logo from "../../../common/Logo";
import StyledNavLink from "../../../common/StyledNavLink";
import SignUpForm from "../../../ui/Forms/Login/SignUpForm";

const SignUpPage = () => {
    return (
        <div className="login">
            <div className="login__info login-info">
                <div className="login-info__logo">
                    <Logo />
                </div>
                <div className="login-info__title">
                    Тоже хочешь стать ОЙ-тишником ? Тогда тебе к нам!
                </div>
                <div className="login-info__text">
                    Совсем не важно, чтобы получилось хорошо с первого раза.
                    Жизненно важно, чтобы хорошо получилось с последнего.
                </div>
            </div>
            <div className="login__form login-form">
                <div className="login-form__title">Создать аккунт</div>
                <p className="login-form__subtitle">
                    Уже есть аккаунт?{" "}
                    <StyledNavLink to="/login/signin">Войти</StyledNavLink>
                </p>
                <SignUpForm />
            </div>
        </div>
    );
};

export default SignUpPage;
