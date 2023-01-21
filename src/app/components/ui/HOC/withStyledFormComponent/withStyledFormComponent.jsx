import React from "react";

const withStyledFormComponent = (Component) => (props) => {
    return (
        <div className="login">
            <Component {...props} />
        </div>
    );
};

export default withStyledFormComponent;
