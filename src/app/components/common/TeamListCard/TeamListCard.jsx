import { useState } from 'react';
import PropTypes from 'prop-types';
import person from '../../../assets/images/person.jpg';
import SvgIcon from '../SvgIcon';
import Button from '../Button';
import { declOfNum, getAge } from '../../../utils/helpFunctions';
import Badge from '../Badge';

const TeamListCard = ({ type = 'list', name, birthDate, proffession, description, isFavourite, qualities }) => {
	const [fav, setFav] = useState(isFavourite);

	const age = getAge(birthDate);

	const handlerFav = () => {
		setFav(prev => !prev);
	}

	return (
		<div className={`team-list-card ${type}`}>
			<div className="team-list-card_container">

				<div className='team-list-card_image-block'>
					<div className="team-list-card_image">
						<a href="/">
							<img src={person} alt={name} />
						</a>

						<Button styleType='none team-list-card_favourite' onClick={handlerFav}>
							<SvgIcon name='heart' svgClass={fav ? 'favourite-active' : ''} />
						</Button>

					</div>
				</div>

				<div className='team-list-card_content'>
					<h3 className="team-list-card_name">
						<a href="/">{name}</a>
					</h3>

					<div className='team-list-card_proffession'>
						{age} {declOfNum(age, ["год", "года", "лет"])}, <span>{proffession}</span>
					</div>

					{
						type === 'list' && qualities?.length ?
							<div className='team-list-card_qualities'>
								{qualities.map(quality => (
									<Badge key={quality.id} text={quality.name} className={quality.color} />
								))}
							</div>
							: null
					}

					<div className="team-list-card_desc">{description}</div>
				</div>

			</div>
		</div>
	);
}

TeamListCard.propTypes = {
	name: PropTypes.string.isRequired,
	birthDate: PropTypes.string.isRequired,
	proffession: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	isFavourite: PropTypes.bool,
	qualities: PropTypes.arrayOf(PropTypes.object)
}

export default TeamListCard;