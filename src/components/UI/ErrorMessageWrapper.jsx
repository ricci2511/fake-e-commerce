import React from 'react';

const ErrorMessageWrapper = ({ error }) => {
    return (
        <div className="flex items-center justify-center text-xl">
            Error: {error}
        </div>
    );
};

export default ErrorMessageWrapper;
