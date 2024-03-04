// En MessageDisplay.js
import React from 'react';
import { Typography, Paper } from '@mui/material';
import { Container, TextField, Button } from '@mui/material';
const MessageDisplay = (props) => {
    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '10px' }}>
                <Typography variant="h4">Current Message</Typography>
                <Typography variant="body1">{props.message}</Typography>
            </Paper>
        </Container>
    );
};

export default MessageDisplay;
