import { useState } from "react";
import PropTypes from "prop-types";
import SvgIcon from "../SvgIcon";
import Button from "../Button";
import { declOfNum, getAge } from "../../../utils/helpFunctions";
import Badge from "../Badge";
import { Link } from "react-router-dom";

const TeamListCard = ({
    type = "list",
    id,
    name,
    photo,
    birthDate,
    proffession,
    description,
    isFavourite,
    qualities
}) => {
    const [fav, setFav] = useState(isFavourite);

    const age = getAge(birthDate);

    const handlerFav = () => {
        setFav((prev) => !prev);
    };

    return (
        <div className={`team-list-card ${type}`}>
            <div className="team-list-card_container">
                <div className="team-list-card_image-block">
                    <div className="team-list-card_image">
                        <Link to={`/developers/${id}`} >
                            <img src={photo} alt={name} />
                        </Link>

                        <Button
                            styleType="none"
                            className="team-list-card_favourite"
                            onClick={handlerFav}
                        >
                            <SvgIcon
                                name="heart"
                                svgClass={fav ? "favourite-active" : ""}
                            />
                        </Button>
                    </div>
                </div>

                <div className="team-list-card_content">
                    <h3 className="team-list-card_name">
                        <Link to={`/developers/${id}`}>{name}</Link>
                    </h3>

                    <div className="team-list-card_proffession">
                        {age} {declOfNum(age, ["год", "года", "лет"])},{" "}
                        <span>{proffession}</span>
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

                    <div className="team-list-card_desc">{description}</div>
                </div>
            </div>
        </div >
    );
};

TeamListCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    proffession: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFavourite: PropTypes.bool,
    qualities: PropTypes.arrayOf(PropTypes.object)
};

export default TeamListCard;
