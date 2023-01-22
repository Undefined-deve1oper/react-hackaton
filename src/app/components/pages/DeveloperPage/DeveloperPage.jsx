import { useState } from "react";
import PropTypes from "prop-types";
import {
    declOfNum,
    getAge,
    getRandomColor
} from "../../../utils/helpFunctions";
import Button from "../../common/Button";
import SvgIcon from "../../common/SvgIcon";
import Badge from "../../common/Badge";
import ProgressBar from "../../common/ProgressBar";
import MainSlider from "../../ui/MainSlider";
import { getDeveloperById } from "../../../store/slices/developers";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const DeveloperPage = () => {
    const { developerId } = useParams();
    const developer = useSelector(getDeveloperById(developerId));
    console.log(developer);
    const [fav, setFav] = useState(developer.isFavourite);
    const age = getAge(developer.birthDate);

    const handlerFav = () => {
        setFav((prev) => !prev);
    };

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
                        <span>{developer.proffession}</span>
                    </div>

                    <div className="developer-card_info_desc">
                        {developer.description}
                    </div>

                    {developer.skills?.length ? (
                        <div className="developer-card_info_skills">
                            <h3>Навыки</h3>

                            {developer.skills.map((skill) => (
                                <ProgressBar
                                    key={`${skill.title}_${skill.percentages}`}
                                    color={getRandomColor()}
                                    percentages={skill.percentages}
                                    text={skill.title}
                                />
                            ))}
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
        </div>
    );
};

export default DeveloperPage;
