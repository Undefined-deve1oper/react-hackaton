import React, { useState } from "react";
import Container from "../Container/Container";
import Logo from "../Logo";
import NavBar from "../NavBar";
import MobileMenu from "../../ui/MobileMenu";
import NavProfile from "../../ui/NavProfile";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
import Burger from "../Burger";
import logoutIcon from "../../../assets/svg/logout.svg";

const navLinks = [
    { path: "/", name: "Наша команда", id: 1, linkClass: "menu__link" },
    {
        path: "/favorites",
        name: "Избранное",
        id: 2
    }
];

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const navigation = useNavigate();
    const isLoggedIn = false;

    const handleToggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    const goLogin = () => {
        navigation("/login/signin");
    };

    return (
        <header className="header">
            <Container>
                <div className="header__container">
                    <Logo />
                    <NavBar links={navLinks} className={"header__menu menu"} />
                    <div className={"header__actions actions-header"}>
                        {isLoggedIn && <NavProfile />}
                        <div className={"actions-header__button"}>
                            <Button onClick={goLogin}>
                                {!isLoggedIn ? (
                                    "Вход"
                                ) : (
                                    <img src={logoutIcon} alt="logout" />
                                )}
                            </Button>
                        </div>
                        <Burger open={isOpen} onToggle={handleToggleMenu} />
                    </div>
                </div>

                <MobileMenu links={navLinks} open={isOpen} />
            </Container>
        </header>
    );
};

export default Header;
