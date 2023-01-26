import { useState } from "react";
import PropTypes from "prop-types";
import { declOfNum, getAge } from "../../../utils/helpFunctions";
import { Link } from "react-router-dom";
import Button from "../Button";
import SvgIcon from "../SvgIcon";
import Badge from "../Badge";
import { useSelector } from "react-redux";
import { getQualitiesListByIds } from "../../../store/slices/qualities";
import { getDeveloperById } from "../../../store/slices/developers";
import FavouriteButton from "../FavouriteButton";

const DeveloperCard = ({ id, type = "list" }) => {
    const developer = useSelector(getDeveloperById(id));
    const qualities = useSelector(getQualitiesListByIds(developer.qualities));
    const age = getAge(developer.birthDate);

    return (
        <div className={`team-list-card ${type}`}>
            <div className="team-list-card_container">
                <div className="team-list-card_image-block">
                    <div className="team-list-card_image">
                        <Link to={`/developers/${id}`}>
                            <img src={developer.photo} alt={developer.name} />
                        </Link>

                        <Button
                            styleType="none"
                            className="team-list-card_favourite"
                        >
                            {developer.id && (
                                <FavouriteButton id={developer.id} />
                            )}
                        </Button>
                    </div>
                </div>

                <div className="team-list-card_content">
                    <h3 className="team-list-card_name">
                        <Link to={`/developers/${id}`}>{developer.name}</Link>
                    </h3>

                    <div className="team-list-card_proffession">
                        {age} {declOfNum(age, ["год", "года", "лет"])},{" "}
                        <span>{developer.profession}</span>
                    </div>

                    {type === "list" && qualities?.length ? (
                        <div className="team-list-card_qualities">
                            {qualities.map((quality) => (
                                <Badge
                                    key={quality.id}
                                    text={quality.name}
                                    className={quality.color}
                                />
                            ))}
                        </div>
                    ) : null}

                    <div className="team-list-card_desc">
                        {developer.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeveloperCard;
