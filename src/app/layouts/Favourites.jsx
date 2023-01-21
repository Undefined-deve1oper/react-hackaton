import React from "react";
import { useLocation } from "react-router";
import BreadСrumbs from "../components/common/BreadСrumbs";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/common/Main";
import ProgressBar from "../components/common/ProgressBar";

const Favorites = () => {
    const location = useLocation();

    return (
        <>
            <Header />
            <Main>
                <BreadСrumbs location={location} />
                <ProgressBar
                    percentages={80}
                    title={"javaScript"}
                    type="circle"
                />
            </Main>
            <Footer />
        </>
    );
};

export default Favorites;
