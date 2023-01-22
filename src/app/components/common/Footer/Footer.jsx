import React from "react";
import Container from "../Container";
import NavBar from "../NavBar";
import footerLinks from "../../../config/footerLinks.json";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <NavBar links={footerLinks} className="footer__menu menu" />
                <p className="rights">
                    © {new Date().getFullYear()} Developers, Inc. All rights
                    reserved.
                </p>
            </Container>
            {/* <div className="footer">
                <nav className="nav-footer">
                    <div className="link">
                        <Link
                            to="/"
                            className="text-base leading-6 text-gray-500 hover:text-gray-900"
                        >
                            Главная страница
                        </Link>
                    </div>
                    <div className="link">
                        <Link
                            to="/works"
                            className="text-base leading-6 text-gray-500 hover:text-gray-900"
                        >
                            Наши работы
                        </Link>
                    </div>
                    <div className="link">
                        <Link
                            to="/products"
                            className="text-base leading-6 text-gray-500 hover:text-gray-900"
                        >
                            Магазин
                        </Link>
                    </div>
                    <div className="link">
                        <Link
                            to="/about"
                            className="text-base leading-6 text-gray-500 hover:text-gray-900"
                        >
                            О нас
                        </Link>
                    </div>
                </nav>
            </div> */}
        </footer>
    );
};

export default Footer;
