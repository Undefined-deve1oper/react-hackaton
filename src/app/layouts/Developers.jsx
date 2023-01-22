import React from "react";
import BreadСrumbs from "../components/common/BreadСrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/common/Main";
import DeveloperPage from "../components/pages/DeveloperPage"

const Developers = () => {

    return (
        <>
            <Header />
            <Main>
                <BreadСrumbs />
                <Container>
                    <DeveloperPage />
                </Container>
            </Main>
            <Footer />
        </>
    );
};

export default Developers;
