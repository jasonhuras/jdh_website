import Navbar from '../components/Navbar'; // Use your Navbar component
import { Container, Box, Typography, Link, Grid } from '@mui/material';

const InvestLayout = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-end"
                    sx={{ padding: '5% 0 5% 0' }}
                >
                    <Grid item md={6} xs={12}>
                        <Typography align="center" variant="h2" gutterBottom>Email <Link>jason.dhuras@gmail.com</Link> </Typography>
                        <Typography align="center" variant="body2" >
                            Only taking private investors
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12} style={{ paddingTop: '10px' }}>
                        <Box my={2}>
                            <Typography align="center" variant="body1">
                                • You Get 50% of Your Money's Profit
                            </Typography>
                        </Box>
                        <Box my={2}>
                            <Typography align="center" variant="body1">
                                • Minimum $300 Deposit
                            </Typography>
                        </Box>
                        <Box my={2}>
                            <Typography align="center" variant="body1">
                                • Withdraw Anytime
                            </Typography>
                        </Box>
                        <Box my={2}>
                            <Typography align="center" variant="body1">
                                • Monthly Account Reports
                            </Typography>
                        </Box>
                        <Box my={2}>
                            <Typography align="center" variant="body1">
                                • SMS Nofications available
                            </Typography>
                        </Box>
                        <Box my={2}>
                            <Typography align="center" variant="body1">
                                • Account Safety and Trust Guarenteed
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </>
    );
};

export default InvestLayout;

