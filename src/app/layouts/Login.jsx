import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/common/Container";
import BreadCrumbs from "../components/common/BreadСrumbs";

const Login = () => {
    return (
        <>
            <Container>
                <BreadCrumbs />
                <Outlet />
            </Container>
        </>
    );
};

export default Login;
