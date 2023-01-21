import React from "react";
import Logo from "../../../common/Logo";
import StyledNavLink from "../../../common/StyledNavLink";
import SignInForm from "../../../ui/Forms/Login/SignInForm/SignInForm";
import withStyledFormComponent from "../../../ui/HOC/withStyledFormComponent";

const SignInPage = () => {
    return (
        <>
            <div className="login__info login-info">
                <div className="login-info__logo">
                    <Logo />
                </div>
                <div className="login-info__title">
                    Лучшая команда разработчиков ждет тебя!
                </div>
                <div className="login-info__text">
                    Самая большая проблема с программистами в том, что ты
                    никогда не сможешь понять, чем он занимается, пока не будет
                    слишком поздно.
                </div>
            </div>
            <div className="login__form login-form">
                <div className="login-form__title">Вход</div>
                <p className="login-form__subtitle">
                    Еще нет аккаунта?{" "}
                    <StyledNavLink to="/login/signup">
                        Создать аккаунт
                    </StyledNavLink>
                </p>
                <SignInForm />
            </div>
        </>
    );
};
const StyledSignIpPage = withStyledFormComponent(SignInPage);
export default StyledSignIpPage;
