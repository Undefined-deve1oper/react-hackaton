import PropTypes from 'prop-types';
import { useState } from 'react';
import TeamListCard from "../TeamListCard/TeamListCard";

const TeamList = ({ list, type = 'flat' }) => {
	const [currentType, setCurrentType] = useState(type);

	return (
		<>
			<button onClick={() => setCurrentType(prev => prev === 'flat' ? 'list' : 'flat')}>Поменять вид</button>

			<div className={`team-list ${currentType}`}>
				{list.map(person => (
					<div key={person.id} className="team-list_item">
						<TeamListCard {...person} type={currentType} />
					</div>
				))}

			</div>
		</>
	);
}

TeamList.propTypes = {
	list: PropTypes.arrayOf(PropTypes.object).isRequired,
	type: PropTypes.string
}

export default TeamList;