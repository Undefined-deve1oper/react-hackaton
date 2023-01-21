import React, { Suspense } from "react";
import Loader from "../../common/Loader";

const withSuspense = (Component) => (props) => {
    return (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );
};

export default withSuspense;
