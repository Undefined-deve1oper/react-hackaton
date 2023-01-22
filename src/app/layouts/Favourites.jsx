import React from "react";
import BreadСrumbs from "../components/common/BreadСrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/common/Main";
import ProgressBar from "../components/common/ProgressBar";

const testData = [
    { bgcolor: "redux", completed: 25, title: "JS" },
    { bgcolor: "red", completed: 50, title: "React" },
    { bgcolor: "orange", completed: 100, title: "Scss" }
];

const Favorites = () => {
    return (
        <>
            <Header />
            <Main>
                <BreadСrumbs />
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
