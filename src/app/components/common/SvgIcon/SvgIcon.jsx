import IconsSVG from '../../../assets/svg/svg-sprite.svg';
import PropTypes from "prop-types";

const SvgIcon = ({ name, width, height, svgClass = '', fillColor, strokeColor }) => {

	const classes = [`svg-icon`, `svg-icon-${name}`];

	if (svgClass) {
		classes.push(svgClass);
	}

	return (
		<svg className={classes.join(" ")} fill={fillColor} stroke={strokeColor} width={width} height={height}>
			<use xlinkHref={`${IconsSVG}#${name}`} />
		</svg>
	)
}

SvgIcon.propTypes = {
	name: PropTypes.string.isRequired,
	width: PropTypes.string,
	height: PropTypes.string,
	svgClass: PropTypes.string,
	fillColor: PropTypes.string,
	strokeColor: PropTypes.string
};

export default SvgIcon;