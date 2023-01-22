import React from "react";
import Advantages from "../../common/Advantages";
import Container from "../../common/Container";
import principlesBlock from "../../../config/principlesBlock.json";
import clientsBlock from "../../../config/clientsBlock.json";
import DeveloperList from "../../common/DeveloperList";
import { useSelector } from "react-redux";
import { getDevelopersList } from "../../../store/slices/developers";

const HomePage = () => {
    const developers = useSelector(getDevelopersList());

    return (
        <>
            <Container>
                <Advantages {...principlesBlock} />
                <Advantages {...clientsBlock} />
                <DeveloperList list={developers} type="flat" />
            </Container>
        </>
    );
};

export default HomePage;
