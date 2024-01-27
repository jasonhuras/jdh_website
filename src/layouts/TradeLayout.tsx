import Navbar from '../components/Navbar';
import TradeHistoryTable from '../components/TradeHistoryTable';
import { Box, Container, Grid, Button, Typography } from '@mui/material';

const TradeLayout = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ padding: '10px 0 10px 0' }}
                >
                    <Grid item xs={12} md={4} sx={{ paddingBottom: '10px' }}>
                        <Grid container direction="row" justifyContent="center">
                            <Grid item md={12} xs={12} sx={{ display: "flex", justifyContent: "center", padding: '15px 0 15px 0' }}>
                                <Button variant="outlined" style={{ fontSize: '2.0rem' }} href={'transactionhistory.csv'} download="data.csv">
                                    Download CSV
                                </Button>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Typography align="center" variant="body1">
                                    • Full Trade History From Broker
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs md>
                        <Box>
                            <TradeHistoryTable></TradeHistoryTable>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default TradeLayout;
