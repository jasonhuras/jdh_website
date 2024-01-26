import Navbar from '../components/Navbar';
import TradeHistoryTable from '../components/TradeHistoryTable';
import { Box, Container, Grid, Button } from '@mui/material';

const TradeLayout = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={4}>
                        <Button style={{ fontSize: '2.0rem' }} href={'transactionhistory.csv'} download="data.csv">
                            Download CSV
                        </Button>
                    </Grid>
                    <Grid item xs md>
                        <Box my={4}>
                            <TradeHistoryTable></TradeHistoryTable>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default TradeLayout;
