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
    const logOut = () => {
        console.log("dfsfsd");
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
                            {!isLoggedIn ? (
                                <Button styleType="animate" onClick={goLogin}>
                                    Вход
                                </Button>
                            ) : (
                                <button
                                    className="actions-header__logout"
                                    onClick={logOut}
                                >
                                    <SvgIcon
                                        name="logout"
                                        width="30"
                                        height="36"
                                    />
                                </button>
                            )}
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
