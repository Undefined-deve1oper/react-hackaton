import React from "react";
import PropTypes from "prop-types";

const Advantages = ({ title, description, advantagesList }) => {
	return (
		<div className="advantages">
			{title.length ? <h2>{title}</h2> : null}
			{description?.length ? <div className="advantages-desc">{description}</div> : null}

			{advantagesList.length ?
				<div className="advantages-list">
					{
						advantagesList.map(advantage => (
							<div key={advantage.title} className={`advantages-element ${advantage.isSmall ? 'advantages-element-small' : ''}`}>
								<div className="advantage">
									<h3>{advantage.title}</h3>
									<div className="advatages-element-description">{advantage.description}</div>
								</div>
							</div>
						))
					}
				</div>
				: null
			}

		</div>
	);
}

Advantages.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	advantagesList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Advantages;