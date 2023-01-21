import React from "react";
import Advantages from "../../common/Advantages";
import Container from "../../common/Container";
import principlesBlock from "../../../config/principlesBlock.json";
import clientsBlock from "../../../config/clientsBlock.json";
import TeamList from "../../common/TeamList";

const HomePage = () => {
    const team = [
        {
            id: 1,
            name: "Александр Окуловских",
            age: 21,
            proffession: "творческий лидер",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха. Мне очень нравилась эта сфера, но решил перейти в программирование из-за большей свободы и возможностей",
            isFavourite: false
        },
        {
            id: 2,
            name: "Александр Окуловских",
            age: 22,
            proffession: "творческий лидер",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха. Мне очень нравилась эта сфера, но решил перейти в программирование из-за большей свободы и возможностей",
            isFavourite: true
        },
        {
            id: 3,
            name: "Александр Окуловских",
            age: 23,
            proffession: "творческий лидер",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха. Мне очень нравилась эта сфера, но решил перейти в программирование из-за большей свободы и возможностей",
            isFavourite: true
        },
        {
            id: 4,
            name: "Александр Окуловских",
            age: 24,
            proffession: "творческий лидер",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха. Мне очень нравилась эта сфера, но решил перейти в программирование из-за большей свободы и возможностей",
            isFavourite: false
        },
        {
            id: 5,
            name: "Александр Окуловских",
            age: 25,
            proffession: "творческий лидер",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха. Мне очень нравилась эта сфера, но решил перейти в программирование из-за большей свободы и возможностей",
            isFavourite: false
        }
    ];

    return (
        <>
            <Container>
                <Advantages {...principlesBlock} />
                <Advantages {...clientsBlock} />
                <TeamList list={team} type="flat" />
            </Container>
        </>
    );
};

export default HomePage;
