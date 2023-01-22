import React from "react";
import BreadСrumbs from "../components/common/BreadСrumbs";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Main from "../components/common/Main";
import ProgressBar from "../components/common/ProgressBar";

const testData = [
    { bgcolor: "red", completed: "25", text: "JS" },
    { bgcolor: "blue", completed: "50", text: "React" },
    { bgcolor: "orange", completed: "100", text: "Scss" }
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
                            progress={item.completed}
                            color={item.bgcolor}
                            text={item.text}
                        />
                    ))}
                </Container>
            </Main>
            <Footer />
        </>
    );
};

export default Favorites;
