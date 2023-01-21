import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/common/Container";

const Login = () => {
    return (
        <>
            <Container>
                {/* <BreadCrumbs /> */}
                <Outlet />
            </Container>
        </>
    );
};

export default Login;
