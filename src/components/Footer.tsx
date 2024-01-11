import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';

const Footer = () => {
    const pageLinks = {
        'Home': '/',
        'Invest': '/invest',
        'Trade History': '/trade-history',
        'Contact us': '/contact-us'
    };

    return (
        <Box component="footer" sx={{ bgcolor: 'secondary.background2', color: 'white', py: 3, borderTop: "1px solid #1f262e" }}>
            <Container maxWidth="xl">
                <Grid container spacing={4} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" color="inherit" gutterBottom>
                            JDH Investment Strategies
                        </Typography>
                        <Box>
                            {Object.entries(pageLinks).map(([text, href]) => (
                                <Typography key={href}>
                                    <Link href={href} color="inherit" variant="body1">
                                        {text}
                                    </Link>
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Legal
                        </Typography>
                        <Typography>
                            <Link href="#" color="inherit" variant="body1">
                                Privacy Policy
                            </Link>
                        </Typography>
                        <Typography>
                            <Link href="#" color="inherit" variant="body1">
                                Terms of Service
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="inherit" align="center">
                        © {new Date().getFullYear()} JDH Investment Strategies. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
