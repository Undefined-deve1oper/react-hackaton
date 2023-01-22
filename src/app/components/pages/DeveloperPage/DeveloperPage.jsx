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
import { useSelector } from "react-redux";
import { getQualitiesListByIds } from "../../../store/slices/qualities";
import { Link } from "react-router-dom";

const DeveloperPage = () => {
    const { developerId } = useParams();
    const developer = useSelector(getDeveloperById(developerId));
    const qualities = useSelector(getQualitiesListByIds(developer.qualities));
    const [fav, setFav] = useState(true);
    const age = getAge(developer.birthDate);
    const types = ["horizontal", "circle"];
    const currentType = types[random(0, types.length - 1)];

    const handlerFav = () => {
        setFav((prev) => !prev);
    };

    return (
        <div className="developer-card">

            <div className="developer-card_back">
                <Link to="/developers">
                    <Button styleType={'none'} className="back-button">&#8678; <span>Весь состав команды</span></Button>
                </Link>
            </div>

            <div className="developer-card_info">
                <div className="developer-card_info_left">

                    <div className="developer-card_info_name mobile-open">
                        <h1>{developer.name}</h1>
                    </div>

                    <div className="developer-card_info_proffession  mobile-open">
                        {age} {declOfNum(age, ["год", "года", "лет"])},{" "}
                        <span>{developer.profession}</span>
                    </div>

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

                    <div className="developer-card_info_socials">
                        {developer.social?.telegram ?
                            <div className="developer-card_info_telegram">
                                <a target={"_blank"} href={`https://t.me/${developer.social.telegram}`} rel="noreferrer">
                                    <SvgIcon name="telegram" />
                                    @{developer.social.telegram}

                                </a>
                            </div>
                            : null
                        }
                    </div>
                </div>

                <div className="developer-card_info_right">
                    <div className="developer-card_info_name mobile-close">
                        <h1>{developer.name}</h1>
                    </div>

                    <div className="developer-card_info_proffession mobile-close">
                        {age} {declOfNum(age, ["год", "года", "лет"])},{" "}
                        <span>{developer.profession}</span>
                    </div>

                    <div className="developer-card_info_desc">
                        {developer.description}
                    </div>

                    {developer.skills?.length ? (
                        <div className="developer-card_info_skills">
                            <h3><span>Навыки</span></h3>
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

                </div>
            </div>

            <div className="developer-card_info_worked">
                <h2><span>Роль в проекте</span></h2>
                {developer.workedOn}
            </div>

            {
                developer.projects?.length ? (
                    <div className="developer-card_projects">
                        <h2><span>Проекты</span></h2>
                        <MainSlider items={developer.projects} />
                    </div>
                ) : null
            }
        </div >
    );
};

export default DeveloperPage;
