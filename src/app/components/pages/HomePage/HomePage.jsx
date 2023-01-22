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
            birthDate: "31.05.1987",
            proffession: "творческий лидер",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха. Мне очень нравилась эта сфера, но решил перейти в программирование из-за большей свободы и возможностей",
            isFavourite: false,
            qualities: [
                {
                    id: "67rdca3eeb7f6fgeed471101",
                    color: "blue",
                    name: "Разработчик"
                },
                {
                    id: "67rdca3eeb7f6fgeed4711012",
                    color: "green",
                    name: "Команда 2"
                }
            ]
        },
        {
            id: 2,
            name: "Александр Окуловских",
            birthDate: "24.12.1997",
            proffession: "программист от бога",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха.",
            isFavourite: true,
            qualities: [
                {
                    id: "67rdca3eeb7f6fgeed471102",
                    color: "violet",
                    name: "Душа компании"
                },
                {
                    id: "67rdca3eeb7f6fgeed471103",
                    color: "black",
                    name: "Мотиватор"
                }
            ]
        },
        {
            id: 3,
            name: "Александр Окуловских",
            birthDate: "31.05.2002",
            proffession: "душа компании",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха. Мне очень нравилась эта сфера, но решил перейти в программирование из-за большей свободы и возможностей",
            isFavourite: true
        },
        {
            id: 4,
            name: "Александр Окуловских",
            birthDate: "09.12.1978",
            proffession: "завхоз",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха. Мне очень нравилась эта сфера, но решил перейти в программирование из-за большей свободы и возможностей",
            isFavourite: false
        },
        {
            id: 5,
            name: "Александр Окуловских",
            birthDate: "17.01.2002",
            proffession: "директор всея Руси",
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
                <TeamList list={team} type="flat" showSwitchPanel />
            </Container>
        </>
    );
};

export default HomePage;
