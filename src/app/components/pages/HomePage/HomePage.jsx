import React from "react";
import Advantages from "../../common/Advantages";
import Container from "../../common/Container";
import principlesBlock from "../../../config/principlesBlock.json";
import clientsBlock from "../../../config/clientsBlock.json";

const HomePage = () => {
    return (
        <>
            <Container>
                <Advantages {...principlesBlock} />
                <Advantages {...clientsBlock} />
            </Container>
        </>
    );
};

export default HomePage;
