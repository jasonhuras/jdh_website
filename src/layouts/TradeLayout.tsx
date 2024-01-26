import Navbar from '../components/Navbar';
import TradeHistoryTable from '../components/TradeHistoryTable';
import { Box, Container, Grid, Button } from '@mui/material';

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
                    <Grid item xs={12} md={4}>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Button style={{ fontSize: '2.0rem' }} href={'transactionhistory.csv'} download="data.csv">
                                    Download CSV
                                </Button>
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
