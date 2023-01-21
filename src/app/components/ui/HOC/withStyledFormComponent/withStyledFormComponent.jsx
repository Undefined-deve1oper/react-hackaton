import React from "react";

const withStyledFormComponent = (Component) => (props) => {
    return (
        <div class="login">
            <Component {...props} />
        </div>
    );
};

export default withStyledFormComponent;
