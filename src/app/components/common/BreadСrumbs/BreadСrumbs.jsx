import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from "prop-types";
/*
    Component call example
    const location = useLocation()
    <BreadСrumbs location={location}/>
* */
const BreadСrumbs = ({location}) => {
    const pathName = location.pathname
    const arrayPathName = pathName.split("/").filter(x => x);
    const breadcrumbsArray = arrayPathName.map((name, index) => {
        const slash = index !== 0 ? '/' : ''
        const text = slash + name
        const path = '/' + arrayPathName.slice(0, index + 1).join('/')
        return [text, path]
    })
    console.log('breadcrumbsArray', breadcrumbsArray)
    return (
        <>
            {breadcrumbsArray.map(item => (
                <NavLink to={`${item[1]}`} className={'breadcrumbs'} end>
                    {`${item[0]}`}
                </NavLink>
            ))}
        </>
    );
};

BreadСrumbs.propTypes = {
    location: PropTypes.object.isRequired,
}

export default BreadСrumbs;
