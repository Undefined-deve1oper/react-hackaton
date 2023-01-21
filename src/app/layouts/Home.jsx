import React from "react";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import Main from "../components/common/Main";
import HomePage from "../components/pages/HomePage";

const Home = () => {
    return (
        <>
            <Header />
            <Main>
                <HomePage />
            </Main>
            <Footer />
        </>
    );
};

export default Home;
