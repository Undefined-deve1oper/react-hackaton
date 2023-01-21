import React from "react";
import Footer from "../components/common/Footer/Footer";
import Header from "../components/common/Header/Header";
import Main from "../components/common/Main";
import ProgressBar from "../components/common/ProgressBar/ProgressBar";

function Favorites() {
    return (
        <>
            <Header />
            <Main>
                <ProgressBar />
            </Main>
            <Footer />
        </>
    );
}

export default Favorites;
