import React from 'react';
import Navbar from '../components/Navbar';
import TradeHistoryTable from '../components/TradeHistoryTable';
import { Box, Container, Typography, Paper, Button } from '@mui/material';

const TradeLayout = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Box my={4}>
                    <TradeHistoryTable></TradeHistoryTable>
                </Box>
            </Container>
        </>
    );
};

export default TradeLayout;
