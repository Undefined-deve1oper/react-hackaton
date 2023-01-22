import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import DeveloperCard from "../DeveloperCard";

const DeveloperList = ({ list, type = "list", showSwitchPanel = false }) => {
    const [currentType, setCurrentType] = useState(type);

    const switchPanel = [
        {
            title: "Плиткой",
            value: "flat"
        },
        {
            title: "Списком",
            value: "list"
        }
    ];

    const handleSwitch = (value) => {
        setCurrentType(value);
    };

    return (
        <div className="team-list-block">
            {showSwitchPanel ? (
                <div className="team-list-block_switch-panel">
                    {switchPanel.map((element) => (
                        <Button
                            styleType="default"
                            className={
                                element.value === currentType
                                    ? "switch-active"
                                    : ""
                            }
                            key={element.value}
                            onClick={() => handleSwitch(element.value)}
                        >
                            {element.title}
                        </Button>
                    ))}
                </div>
            ) : null}

            <div className={`team-list ${currentType}`}>
                {list.map((person) => (
                    <div key={person.id} className="team-list_item">
                        <DeveloperCard {...person} type={currentType} />
                    </div>
                ))}
            </div>
        </div>
    );
};

DeveloperList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string,
    showSwitchPanel: PropTypes.bool
};

export default DeveloperList;
