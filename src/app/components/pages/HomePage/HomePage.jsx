import React from "react";
import Advantages from "../../common/Advantages";
import Container from "../../common/Container";
import principlesBlock from "../../../config/principlesBlock.json";
import clientsBlock from "../../../config/clientsBlock.json";
import DeveloperList from "../../common/DeveloperList";
import team from "../../../config/team.json";

const HomePage = () => {
    return (
        <>
            <Container>
                <Advantages {...principlesBlock} />
                <Advantages {...clientsBlock} />
                <DeveloperList list={team} type="flat" />
            </Container>
        </>
    );
};

export default HomePage;
