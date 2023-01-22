import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/common/Container";

const Login = () => {
    return (
        <div className="wrapper">
            <Container>
                <Outlet />
            </Container>
        </div>
    );
};

export default Login;
