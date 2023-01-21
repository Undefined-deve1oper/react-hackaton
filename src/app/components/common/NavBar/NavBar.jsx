import React, { useState } from "react";
import Container from "../../common/Container/Container";
import Logo from "../Logo";
import StyledNavLink from "../StyledNavLink";
import Button from "../Button/Button";
import PhoneMenu from "../../ui/PhoneMenu/PhoneMenu";
import { useNavigate } from "react-router-dom";

const navLinks = [
    { path: "/", name: "Our team", id: 1 },
    {
        path: "/favorites",
        name: "Favourites",
        id: 2
    }
];

function NavBar() {
    const [isOpen, setOpen] = useState(false);
    const navigation = useNavigate();

    const handleToggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    const closeMenu = () => {
        setOpen(false);
    };
    const goLogin = () => {
        navigation("/login/signin");
    };

    return (
        <header className="header">
            <Container>
                <div className="header__container">
                    <Logo />
                    <nav className="header__main-menu menu">
                        <ul className="menu__list">
                            {navLinks.map((link) => (
                                <li key={link.id} className={"menu__item"}>
                                    <StyledNavLink
                                        className={"menu__link"}
                                        to={link.path}
                                    >
                                        {link.name}
                                    </StyledNavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
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

                <PhoneMenu links={navLinks} open={isOpen} close={closeMenu} />
            </Container>
        </header>
    );
}

export default NavBar;
