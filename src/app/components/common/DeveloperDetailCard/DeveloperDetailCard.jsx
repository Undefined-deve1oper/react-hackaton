import { useState } from 'react';
import PropTypes from 'prop-types';
import Badge from "../Badge";
import { declOfNum, getAge, getRandomColor } from "../../../utils/helpFunctions";
import ProgressBar from '../ProgressBar/ProgressBar';
import ProjectSlider from '../../ui/projectSlider/projectSlider';
import Button from '../Button';
import SvgIcon from '../SvgIcon';

const DeveloperDetailCard = ({ name, birthDate, photo, proffession, description, workedOn, qualities, skills, projects, isFavourite }) => {

	const [fav, setFav] = useState(isFavourite);

	const age = getAge(birthDate);

	const handlerFav = () => {
		setFav((prev) => !prev);
	};

	return (
		<div className="developer-card">
			<div className="developer-card_info">

				<div className="developer-card_info_left">

					<div className="developer-card_info_image-block">
						<img src={photo} alt={name} />
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
						<h1>{name}</h1>
					</div>

					<div className="developer-card_info_proffession">
						{age} {declOfNum(age, ["год", "года", "лет"])},{" "}
						<span>{proffession}</span>
					</div>

					<div className="developer-card_info_desc">{description}</div>

					{skills?.length ?
						<div className='developer-card_info_skills'>
							<h3>Навыки</h3>

							{skills.map(skill => (
								<ProgressBar key={`${skill.title}_${skill.percentages}`} color={getRandomColor()} progress={skill.percentages} text={skill.title} />
							))}
						</div>
						: null
					}

					<div className="developer-card_info_worked">
						<h3>Работал над</h3>
						{workedOn}
					</div>
				</div>
			</div>


			{projects?.length ?
				<div className='developer-card_projects'>
					<h2>Проекты</h2>
					<ProjectSlider items={projects} />
				</div>
				: null
			}

		</div>
	)
}

DeveloperDetailCard.propTypes = {
	name: PropTypes.string.isRequired,
	birthDate: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired,
	proffession: PropTypes.string.isRequired,
	description: PropTypes.string,
	workedOn: PropTypes.string,
	qualities: PropTypes.arrayOf(PropTypes.object),
	skills: PropTypes.arrayOf(PropTypes.object),
	projects: PropTypes.arrayOf(PropTypes.string),
	isFavourite: PropTypes.bool
}

export default DeveloperDetailCard;