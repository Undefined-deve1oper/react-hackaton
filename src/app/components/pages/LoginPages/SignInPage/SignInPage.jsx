import React from "react";
import Logo from "../../../common/Logo";
import StyledNavLink from "../../../common/StyledNavLink";
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
                <form
                    action="#"
                    method="POST"
                    className="signupForm"
                    name="signupform"
                >
                    <ul className="noBullet">
                        <li>
                            <label htmlFor="username"></label>
                            <input
                                type="text"
                                className="inputFields"
                                id="username"
                                name="username"
                                placeholder="Username"
                                value=""
                                onInput="return userNameValidation(this.value)"
                                required
                            />
                        </li>
                        <li>
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                className="inputFields"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value=""
                                onInput="return passwordValidation(this.value)"
                                required
                            />
                        </li>
                        <li>
                            <label htmlFor="email"></label>
                            <input
                                type="email"
                                className="inputFields"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value=""
                                required
                            />
                        </li>
                        <li id="center-btn">
                            <input
                                type="submit"
                                id="join-btn"
                                name="join"
                                alt="Join"
                                value="Join"
                            />
                        </li>
                    </ul>
                </form>
            </div>
        </>
    );
};
const StyledSignIpPage = withStyledFormComponent(SignInPage);
export default StyledSignIpPage;
