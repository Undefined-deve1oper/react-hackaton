import React from "react";
import Container from "../Container";
import StyledNavLink from "../StyledNavLink";
import SvgIcon from "../SvgIcon/SvgIcon";
import { useLocation } from "react-router-dom";
import breadCrumbsLinks from "../../../config/breadCrumbsLinks.json";

const BreadСrumbs = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const arrayPathName = pathName.split("/").filter((x) => x);
    const breadcrumbsArray = arrayPathName.map((name, index) => {
        const path = "/" + arrayPathName.slice(0, index + 1).join("/");
        const indexOfText = breadCrumbsLinks.findIndex((n) => n.path === path);
        const text = breadCrumbsLinks[indexOfText]?.name;
        return { text, path };
    });

    return (
        <div className="breadcrumbs">
            <Container>
                <div className="breadcrumbs__container">
                    <StyledNavLink to={"/"} className={"breadcrumbs__item"} end>
                        <SvgIcon name="home" width="20" height="19" />
                        Домой
                    </StyledNavLink>
                    {" /"}

                    {breadcrumbsArray.map((item) => (
                        <StyledNavLink
                            key={item.path}
                            to={item.path}
                            className={"breadcrumbs__item"}
                            end
                        >
                            {item.text}
                        </StyledNavLink>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default BreadСrumbs;
