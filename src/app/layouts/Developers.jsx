import React from "react";
import { Outlet } from "react-router";
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
                <Outlet />
            </Main>
            <Footer />
        </>
    );
};

export default Developers;
