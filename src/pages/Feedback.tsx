import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Rating,
    Snackbar,
    Container,
    Paper,
} from '@mui/material';

export default function FeedbackPage() {
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!feedback.trim()) {
            setError('Please enter your feedback');
            return;
        }
        if (rating === null) {
            setError('Please provide a rating');
            return;
        }
        // Here you would typically send the feedback to your server
        console.log('Feedback:', feedback, 'Rating:', rating);
        setIsSubmitted(true);
        setFeedback('');
        setRating(null);
        setError('');
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Write Your Feedback
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            label="Your Feedback"
                            multiline
                            rows={4}
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            error={!!error && !feedback.trim()}
                            helperText={!feedback.trim() ? error : ''}
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography component="legend">Rate your experience</Typography>
                        <Rating
                            name="rating"
                            value={rating}
                            onChange={(_, newValue) => {
                                setRating(newValue);
                            }}
                        />
                        {error && rating === null && (
                            <Typography color="error" variant="caption" display="block">
                                {error}
                            </Typography>
                        )}
                    </Box>
                    <Button type="submit" variant="contained" color="primary">
                        Submit Feedback
                    </Button>
                </form>
            </Paper>
            <Snackbar
                open={isSubmitted}
                autoHideDuration={6000}
                onClose={() => setIsSubmitted(false)}
                message="Thank you for your feedback!"
            />
        </Container>
    );
}