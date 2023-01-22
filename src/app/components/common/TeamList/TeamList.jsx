import { useState } from 'react';
import PropTypes from 'prop-types';
import TeamListCard from "../TeamListCard/TeamListCard";
import Button from '../Button';

const TeamList = ({ list, type = 'list', showSwitchPanel = false }) => {
	const [currentType, setCurrentType] = useState(type);

	const switchPanel = [
		{
			title: 'Плиткой',
			value: 'flat'
		},
		{
			title: 'Списком',
			value: 'list'
		}
	];

	const handleSwitch = (value) => {
		setCurrentType(value);
	}

	return (
        <div className="team-list-block">
            {showSwitchPanel ? (
                <div className="team-list-block_switch-panel">
                    {switchPanel.map((element) => (
                        <Button
                            styleType="default"
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
                        <TeamListCard {...person} type={currentType} />
                    </div>
                ))}
            </div>
        </div>
    );
}

TeamList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.object).isRequired,
	type: PropTypes.string,
	showSwitchPanel: PropTypes.bool
}

export default TeamList;