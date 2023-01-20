import React from "react";
import { useParams } from "react-router";

const DeveloperPage = () => {
    const { developerId } = useParams();

    return (
        <div>
            <h1>{developerId}</h1>
        </div>
    );
};

export default DeveloperPage;
