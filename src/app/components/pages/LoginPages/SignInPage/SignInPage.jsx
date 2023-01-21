import React from "react";
import Logo from "../../../common/Logo";
import StyledNavLink from "../../../common/StyledNavLink";

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
                    class="signupForm"
                    name="signupform"
                >
                    <ul class="noBullet">
                        <li>
                            <label for="username"></label>
                            <input
                                type="text"
                                class="inputFields"
                                id="username"
                                name="username"
                                placeholder="Username"
                                value=""
                                oninput="return userNameValidation(this.value)"
                                required
                            />
                        </li>
                        <li>
                            <label for="password"></label>
                            <input
                                type="password"
                                class="inputFields"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value=""
                                oninput="return passwordValidation(this.value)"
                                required
                            />
                        </li>
                        <li>
                            <label for="email"></label>
                            <input
                                type="email"
                                class="inputFields"
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

export default SignInPage;
