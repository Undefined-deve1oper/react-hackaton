import React, { useState } from "react";
import Container from "../Container/Container";
import Logo from "../Logo";
import NavBar from "../NavBar";
import MobileMenu from "../../ui/MobileMenu";
import NavProfile from "../../ui/NavProfile";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
import Burger from "../Burger";
import SvgIcon from "../SvgIcon/SvgIcon";
import headerLinks from "../../../config/headerLinks.json";
import footerLinks from "../../../config/footerLinks.json";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, logout } from "../../../store/slices/auth";

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const navigation = useNavigate();
    const currentUser = useSelector(getCurrentUser());
    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    const goLogin = () => {
        navigation("/login/signin");
    };
    const logOut = () => {
        dispatch(logout());
    };

    return (
        <header className="header">
            <Container>
                <div className="header__container">
                    <Logo />
                    <NavBar
                        links={headerLinks}
                        className={"header__menu menu"}
                    />
                    <div className={"header__actions actions-header"}>
                        {currentUser && <NavProfile />}
                        <div className={"actions-header__button"}>
                            {currentUser ? (
                                <Button
                                    styleType={"none"}
                                    className="actions-header__logout"
                                    onClick={logOut}
                                >
                                    <SvgIcon
                                        name="logout"
                                        width="30"
                                        height="36"
                                    />
                                </Button>
                            ) : (
                                <Button styleType="animate" onClick={goLogin}>
                                    Вход
                                </Button>
                            )}
                        </div>
                        <Burger open={isOpen} onToggle={handleToggleMenu} />
                    </div>
                </div>

                <MobileMenu links={footerLinks} open={isOpen} />
            </Container>
        </header>
    );
};

export default Header;
