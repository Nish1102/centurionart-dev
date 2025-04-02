import React, { createContext, useState } from 'react';

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const [errorMessage, setErrorMessage] = useState(null);

    const setError = (message) => {
        setErrorMessage(message);
        // Optionally, clear the error after a timeout
        setTimeout(() => {
            setErrorMessage(null);
        }, 5000); // Clear error after 5 seconds
    };

    return (
        <ErrorContext.Provider value={{ errorMessage, setError }}>
            {children}
        </ErrorContext.Provider>
    );
};
