import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/common/Main";
import DeveloperPage from "../components/pages/DeveloperPage";

const Developers = () => {
    return (
        <>
            <Header />
            <Main>
                <BreadCrumbs />
                <Container>
                    <DeveloperPage />
                </Container>
            </Main>
            <Footer />
        </>
    );
};

export default Developers;
