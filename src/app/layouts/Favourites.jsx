import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import BreadСrumbs from "../components/common/BreadСrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/common/Main";
import ProgressBar from "../components/common/ProgressBar";

const testData = [
    { bgcolor: "#6a1b9a", completed: 60, title: "JS" },
    { bgcolor: "#00695c", completed: 30, title: "React" },
    { bgcolor: "#ef6c00", completed: 53, title: "Scss" }
];

const Favorites = () => {
    const location = useLocation();

    return (
        <>
            <Header />
            <Main>
                <BreadСrumbs location={location} />
                <Container>
                    {testData.map((item) => (
                        <ProgressBar
                            percentages={item.completed}
                            color={item.bgcolor}
                            title={item.title}
                        />
                    ))}
                </Container>
            </Main>
            <Footer />
        </>
    );
};

export default Favorites;
