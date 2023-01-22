import React from "react";
import { useParams } from "react-router";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Container from "../components/common/Container";
import DeveloperList from "../components/common/DeveloperList";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/common/Main";
import DeveloperPage from "../components/pages/DeveloperPage";
import team from "../config/team.json";

const Developers = () => {
    const { developerId } = useParams();
    const developer = team.find((d) => d.id === developerId);

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
                            list={team}
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
