import React, { useState } from "react";
import Container from "../Container/Container";
import Logo from "../Logo";
import StyledNavLink from "../StyledNavLink";
import Button from "../Button/Button";
import PhoneMenu from "../../ui/MobileMenu/MobileMenu";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import MobileMenu from "../../ui/MobileMenu/MobileMenu";

const navLinks = [
    { path: "/", name: "Our team", id: 1, linkClass: "menu__link" },
    {
        path: "/favorites",
        name: "Favourites",
        id: 2
    }
];

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const navigation = useNavigate();

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
                        <div className={"actions-header__button"}>
                            <Button onClick={goLogin}>Вход</Button>
                        </div>
                        <button
                            type="button"
                            className={`icon-menu`}
                            onClick={handleToggleMenu}
                        >
                            <span className={isOpen ? " _active" : ""}></span>
                        </button>
                    </div>
                </div>

                <MobileMenu links={navLinks} open={isOpen} />
            </Container>
        </header>
    );
};

export default Header;
