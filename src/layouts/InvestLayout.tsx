import Navbar from '../components/Navbar'; // Use your Navbar component
import { Container, Box, Typography, Link } from '@mui/material';

const InvestLayout = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Box my={10}>
                    <Typography align="center" variant="h2" gutterBottom>Email <Link>jason.dhuras@gmail.com</Link> </Typography>
                    <Typography align="center" variant="body2" >
                        Only taking private investors
                    </Typography>
                </Box>
                <Box my={80}></Box>
            </Container>
        </>
    );
};

export default InvestLayout;

