import { useState } from "react";
import {
    declOfNum,
    getAge,
    getRandomColor,
    random
} from "../../../utils/helpFunctions";
import Button from "../../common/Button";
import SvgIcon from "../../common/SvgIcon";
import Badge from "../../common/Badge";
import ProgressBar from "../../common/ProgressBar";
import MainSlider from "../../ui/MainSlider";
import { getDeveloperById } from "../../../store/slices/developers";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getQualitiesListByIds } from "../../../store/slices/qualities";
import ReviewsList from "../../ui/Reviews/ReviewsList/ReviewsList";
import { getAuthUserId, getIsLoggedIn } from "../../../store/slices/auth";
import StyledNavLink from "../../common/StyledNavLink";
import ReviewsForm from "../../ui/Forms/ReviewsForm/ReviewsForm";
import { createFavourite } from "../../../store/slices/favourites";
import { nanoid } from "@reduxjs/toolkit";

const DeveloperPage = () => {
    const { developerId } = useParams();
    const developer = useSelector(getDeveloperById(developerId));
    const qualities = useSelector(getQualitiesListByIds(developer.qualities));
    const [fav, setFav] = useState(true);
    const age = getAge(developer.birthDate);
    const types = ["horizontal", "circle"];
    const currentType = types[random(0, types.length - 1)];
    const isLoggedIn = useSelector(getIsLoggedIn());
    const userId = useSelector(getAuthUserId());
    const dispatch = useDispatch();

    const handlerFav = () => {
        const favourite = {
            pageId: developerId,
            userId,
            id: nanoid()
        };
        dispatch(createFavourite(favourite));
        setFav((prev) => !prev);
    };

    if (developer && qualities) {
        return (
            <div className="developer-card">
                <div className="developer-card_info">
                    <div className="developer-card_info_left">
                        <div className="developer-card_info_image-block">
                            <img src={developer.photo} alt={developer.name} />
                            <Button
                                styleType="none"
                                className="developer-card_favourite"
                                onClick={handlerFav}
                            >
                                <SvgIcon
                                    name="heart"
                                    svgClass={fav ? "favourite-active" : ""}
                                />
                            </Button>
                        </div>

                        {qualities?.length ? (
                            <div className="developer-card_info_qualities">
                                {qualities.map((quality) => (
                                    <Badge
                                        key={quality.id}
                                        text={quality.name}
                                        className={quality.color}
                                    />
                                ))}
                            </div>
                        ) : null}
                    </div>

                    <div className="developer-card_info_right">
                        <div className="developer-card_info_name">
                            <h1>{developer.name}</h1>
                        </div>

                        <div className="developer-card_info_proffession">
                            {age} {declOfNum(age, ["год", "года", "лет"])},{" "}
                            <span>{developer.profession}</span>
                        </div>

                        <div className="developer-card_info_desc">
                            {developer.description}
                        </div>

                        {developer.skills?.length ? (
                            <div className="developer-card_info_skills">
                                <h3>Навыки</h3>
                                <div
                                    className={`developer-card_info_skills-container ${currentType}`}
                                >
                                    {developer.skills.map((skill) => (
                                        <div
                                            key={`${skill.title}_${skill.percentages}`}
                                            className={`developer-card_info_skill ${currentType}`}
                                        >
                                            <ProgressBar
                                                color={getRandomColor()}
                                                percentages={skill.percentages}
                                                text={skill.title}
                                                type={currentType}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}

                        <div className="developer-card_info_worked">
                            <h3>Работал над</h3>
                            {developer.workedOn}
                        </div>
                    </div>
                </div>

                {developer.projects?.length ? (
                    <div className="developer-card_projects">
                        <h2>Проекты</h2>
                        <MainSlider items={developer.projects} />
                    </div>
                ) : null}

                <h3 className={"developer__projects developer__reviews_title"}>
                    Можете это обсудить
                </h3>
                <div className="developer__reviews">
                    <ReviewsList />
                </div>
                {isLoggedIn ? (
                    <ReviewsForm />
                ) : (
                    <div>
                        Чтобы оставлять отзывы необходимо{" "}
                        <StyledNavLink to="/login/signin">
                            войти в аккаунт
                        </StyledNavLink>
                    </div>
                )}
            </div>
        );
    }
};

export default DeveloperPage;
