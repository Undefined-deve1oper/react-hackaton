import React from "react";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/common/Main";
import BreadCrumbs from "../components/common/BreadCrumbs";
import FavouritesPage from "../components/pages/FavouritesPage";

const Favorites = () => {
    return (
        <>
            <Header />
            <Main>
                <BreadCrumbs />
                <Container>
                    <FavouritesPage />
                </Container>
            </Main>
            <Footer />
        </>
    );
};

export default Favorites;
