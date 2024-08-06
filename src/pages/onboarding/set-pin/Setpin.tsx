import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SetPin = () => {
    const [pin, setPin] = useState<string[]>([]);
    const [confirmPin, setConfirmPin] = useState<string[]>([]);
    const [stage, setStage] = useState(0);
    const navigate = useNavigate();

    const handleButtonClick = (value: string) => {
        if (stage === 0 && pin.length < 4) {
            setPin([...pin, value]);
        } else if (stage === 1 && confirmPin.length < 4) {
            setConfirmPin([...confirmPin, value]);
        }
    };

    const handleDeleteOrCancel = () => {
        if (stage === 0 && pin.length === 0) {
            // Redirect to onboarding if no pin has been entered in the first stage
            navigate('/');
        } else if (stage === 0) {
            setPin(pin.slice(0, -1));
        } else if (stage === 1 && confirmPin.length === 0) {
            // Redirect to onboarding if no confirm pin has been entered in the second stage
            navigate('/');
        } else if (stage === 1) {
            setConfirmPin(confirmPin.slice(0, -1));
        }
    };

    const handleNext = () => {
        if (stage === 0 && pin.length === 4) {
            setStage(1);
        } else if (stage === 1 && confirmPin.length === 4) {
            if (pin.join('') === confirmPin.join('')) {
                alert("PIN set successfully!!");
                navigate('/signup-success');
            } else {
                alert("PINs do not match, please try again.");
                setConfirmPin([]);
            }
        }
    };

    useEffect(() => {
        if ((stage === 0 && pin.length === 4) || (stage === 1 && confirmPin.length === 4)) {
            handleNext();
        }
    }, [pin, confirmPin, stage]);

    const deleteOrCancelLabel = (stage === 0 && pin.length === 0) || (stage === 1 && confirmPin.length === 0) ? "Cancel" : "Delete";

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                backgroundColor: '#7F3DFF',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 0px',
            }}
        >
            <Typography variant="h5" gutterBottom>
                {stage === 0 ? "Let's set up your PIN" : "Ok. Re-type your PIN again."}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, marginBottom: 4 }}>
                {[...Array(4)].map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            width: 15,
                            height: 15,
                            borderRadius: '50%',
                            backgroundColor:
                                (stage === 0 ? pin[i] : confirmPin[i]) ? '#fff' : 'transparent',
                            border: '2px solid #fff',
                        }}
                    />
                ))}
            </Box>
            <Grid container spacing={2} sx={{ maxWidth: 300, marginTop: "57px !important" }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <Grid item xs={4} key={num}>
                        <Button
                            fullWidth
                            variant="text"
                            onClick={() => handleButtonClick(num.toString())}
                            sx={{
                                color: '#FFF',
                                fontSize: 24,
                                height: 56,
                                borderRadius: 4,
                            }}
                        >
                            {num}
                        </Button>
                    </Grid>
                ))}
                <Grid item xs={4}></Grid> {/* Empty grid cell */}
                <Grid item xs={4}>
                    <Button
                        fullWidth
                        variant="text"
                        onClick={() => handleButtonClick('0')}
                        sx={{
                            color: '#FFF',
                            fontSize: 24,
                            height: 56,
                            borderRadius: 4,
                        }}
                    >
                        0
                    </Button>
                </Grid>
                <Grid item xs={4}></Grid> {/* Empty grid cell */}
            </Grid>
            <Box sx={{ position: 'absolute', bottom: 20, right: 20 }}>
                <Button
                    variant="text"
                    onClick={handleDeleteOrCancel}
                    sx={{
                        color: '#FFF',
                        fontSize: '1.2rem',
                    }}
                >
                    {deleteOrCancelLabel}
                </Button>
            </Box>
        </Box>
    );
};

export default SetPin;
