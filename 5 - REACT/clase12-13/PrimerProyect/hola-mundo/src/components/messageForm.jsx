import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const MessageForm = (props) => {
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage(msg);
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Set Message
            </Typography>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <TextField
                    label="Your Message"
                    multiline
                    rows={4}
                    placeholder="Enter your message here"
                    variant="outlined"
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Send Message
                </Button>
            </form>
        </Container>
    );
};

export default MessageForm;
