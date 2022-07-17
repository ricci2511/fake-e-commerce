import React from 'react';
import { BouncingBall } from 'react-svg-spinners';

const LoadingWrapper = () => {
    return (
        <div className="flex items-center justify-center">
            <BouncingBall width={35} height={35} />
        </div>
    );
};

export default LoadingWrapper;
