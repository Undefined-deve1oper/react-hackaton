import React from "react";
import { useParams } from "react-router";
import DeveloperDetailCard from "../../common/DeveloperDetailCard";

import TeamList from "../../common/TeamList";

const DeveloperPage = () => {
    const team = [
        {
            id: "1",
            name: "Александр Окуловских",
            photo: "https://images03.nicepage.io/c461c07a441a5d220e8feb1a/02db0d16743e5259b4926be5/4.jpg",
            birthDate: "31.05.1987",
            proffession: "творческий лидер",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха. Мне очень нравилась эта сфера, но решил перейти в программирование из-за большей свободы и возможностей",
            isFavourite: true,
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
            ],
            skills: [
                { title: "JavaScript", percentages: 80 },
                { title: "React", percentages: 50 },
                { title: "SCSS", percentages: 95 }
            ],
            workedOn: "Делал все что хотел, а что не хотел не делал",
            projects: [
                "https://i.pinimg.com/originals/83/a8/a5/83a8a505477607b7e73a5345e87b1688.jpg",
                "https://w-dog.ru/wallpapers/10/14/425754534279151/luk-ozero-nacionalnyj-park-banf-alberta-kanada-gory-nebo-oblaka-ozero-derevya.jpg",
                "https://kartinkin.net/uploads/posts/2022-02/1645443783_6-kartinkin-net-p-kartinki-krasota-prirodi-7.jpg",
                "https://bugaga.ru/uploads/posts/2022-08/1660840053_priroda-4.jpg"
            ]
        },
        {
            id: "2",
            name: "Александр Окуловских",
            photo: "https://images03.nicepage.io/c461c07a441a5d220e8feb1a/02db0d16743e5259b4926be5/4.jpg",
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
            id: "3",
            name: "Александр Окуловских",
            photo: "https://images03.nicepage.io/c461c07a441a5d220e8feb1a/02db0d16743e5259b4926be5/4.jpg",
            birthDate: "31.05.2002",
            proffession: "душа компании",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха. Мне очень нравилась эта сфера, но решил перейти в программирование из-за большей свободы и возможностей",
            isFavourite: true
        },
        {
            id: "4",
            name: "Александр Окуловских",
            photo: "https://images03.nicepage.io/c461c07a441a5d220e8feb1a/02db0d16743e5259b4926be5/4.jpg",
            birthDate: "09.12.1978",
            proffession: "завхоз",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха. Мне очень нравилась эта сфера, но решил перейти в программирование из-за большей свободы и возможностей",
            isFavourite: false
        },
        {
            id: "5",
            name: "Александр Окуловских",
            photo: "https://images03.nicepage.io/c461c07a441a5d220e8feb1a/02db0d16743e5259b4926be5/4.jpg",
            birthDate: "17.01.2002",
            proffession: "директор всея Руси",
            description:
                "Работал в электроэнергетике инженером и начальником смены электроцеха. Мне очень нравилась эта сфера, но решил перейти в программирование из-за большей свободы и возможностей",
            isFavourite: false
        }
    ];

    const { developerId } = useParams();

    const developer = team.find((d) => d.id === developerId);

    return (
        <>
            {developerId ? (
                <>
                    <DeveloperDetailCard {...developer} />
                </>
            ) : (
                <>
                    <TeamList list={team} type="list" showSwitchPanel />
                </>
            )}
        </>
    );
};

export default DeveloperPage;
