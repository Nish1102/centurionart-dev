import React, { useContext } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { ErrorContext } from '../context/ErrorContext';

const ErrorMessage = () => {
    const { errorMessage } = useContext(ErrorContext);

    return (
        <Snackbar 
            open={!!errorMessage} 
            autoHideDuration={6000} 
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert severity="error">{errorMessage}</Alert>
        </Snackbar>
    );
};

export default ErrorMessage;
