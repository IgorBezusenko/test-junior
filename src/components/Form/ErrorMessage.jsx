import React from 'react';

const ErrorMessage = ({error}) => {
    return (
        <span className="text-danger border border-danger">
            {error}
        </span>
    );
};

export default ErrorMessage;
