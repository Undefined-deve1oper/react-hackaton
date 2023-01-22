import React from "react";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/common/Main";
import BreadCrumbs from "../components/common/BreadCrumbs";

const Favorites = () => {
    return (
        <>
            <Header />
            <Main>
                <BreadCrumbs />
                <Container></Container>
            </Main>
            <Footer />
        </>
    );
};

export default Favorites;
