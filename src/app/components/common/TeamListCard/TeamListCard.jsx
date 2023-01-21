import PropTypes from 'prop-types';
import person from '../../../assets/images/person.jpg'
import SvgIcon from '../SvgIcon'
import { declOfNum } from '../../../utils/wordTransform';

const TeamListCard = ({ name, age, proffession, description, isFavourite, type = 'list' }) => {
	return (
		<div className={`team-list-card ${type}`}>
			<div className="team-list-card_container">

				<div className='team-list-card_image-block'>
					<div className="team-list-card_image">
						<a href="/">
							<img src={person} alt={name} />
						</a>

						<div className='team-list-card_favourite'>
							<SvgIcon name='heart' svgClass={isFavourite ? 'favourite-active' : ''} />
						</div>
					</div>
				</div>

				<div className='team-list-card_content'>
					<h3 className="team-list-card_name">
						<a href="/">{name}</a>
					</h3>

					<div className='team-list-card_proffession'>
						{age} {declOfNum(age, ["год", "года", "лет"])}, <span>{proffession}</span>
					</div>

					<div className="team-list-card_desc">{description}</div>
				</div>

			</div>
		</div>
	);
}

TeamListCard.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	proffession: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	isFavourite: PropTypes.bool
}

export default TeamListCard;