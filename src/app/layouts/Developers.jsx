import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Container from "../components/common/Container";
import DeveloperList from "../components/common/DeveloperList";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/common/Main";
import DeveloperPage from "../components/pages/DeveloperPage";
import { getDevelopersList } from "../store/slices/developers";

const Developers = () => {
    const { developerId } = useParams();
    const developers = useSelector(getDevelopersList());

    return (
        <>
            <Header />
            <Main>
                <BreadCrumbs />
                <Container>
                    {developerId ? (
                        <DeveloperPage />
                    ) : (
                        <DeveloperList
                            list={developers}
                            type="list"
                            showSwitchPanel
                        />
                    )}
                </Container>
            </Main>
            <Footer />
        </>
    );
};

export default Developers;
