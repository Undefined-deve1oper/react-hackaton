import React from "react";
import useMockData from "../utils/mockData";

const Test = () => {
    const { error, initialize, progress, status } = useMockData();
    const handleClick = () => {
        initialize();
    };

    return (
        <div>
            <h1>Test Page</h1>
            <h3>Инициализация данных в FireBase</h3>
            <ul>
                <li>Status: {status}</li>
                <li>progress: {progress}%</li>
                {error && <li>error: {error}</li>}
            </ul>
            <button className="btn btn-primary" onClick={handleClick}>
                {" "}
                Инициализировать
            </button>
        </div>
    );
};

export default Test;
