import Navbar from '../components/Navbar';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import Graph from '../components/Graph';

const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Box my={4}>
                    <Typography style={{ textAlign: 'center' }} variant="h4">
                        Turn your money into more money using our AI powered trading algorithm
                    </Typography>
                </Box>
                <Box my={4}>
                    <img src="diagram1.png" alt="image" width="100%" height="100%" />
                </Box>
                <Box my={4}>
                    <Typography variant="h2" gutterBottom>Why Chose Us?</Typography>
                    <Typography variant="body1">
                        We out perform index funds and most financial advisors. This graph below shows proof.
                    </Typography>
                </Box>
                <Box my={4}>
                    <Paper elevation={3}>
                        <Graph />
                    </Paper>
                    <Typography variant="caption" >
                        Cumulative Logarithmic returns each year.
                    </Typography>
                </Box>
                <Box my={4}>
                    <Typography variant="h2" gutterBottom>Why I Need Your Money</Typography>
                    <Typography variant="body1">
                        The bigger the mutual fund, the more money the fund makes. We are only taking private investors until the fund is large enough.
                    </Typography>
                </Box>
                <Box my={4}>
                    <Typography variant="h2" gutterBottom>How It Works</Typography>
                    <Typography variant="body1">
                        Confidential.
                    </Typography>
                </Box>
                <Box my={4}>
                    <Typography variant="h2" gutterBottom>Safety</Typography>
                    <Typography variant="body1">
                        While we cannot promise guarenteed profits, we promise to provide complete official trade history from our broker, giving you full transparency on the trades we make with the mutual fund.
                    </Typography>
                </Box>
                <Box my={4} display="flex" justifyContent="center" alignItems="center">
                    <Button style={{ fontSize: '2.0rem' }} href="#/invest">
                        Invest Now
                    </Button>
                </Box>
            </Container>
        </>
    );
};

export default HomeLayout;
