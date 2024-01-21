import Navbar from '../components/Navbar'; // Use your Navbar component
import { Container, Box, Typography, Link } from '@mui/material';

const ContactLayout = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Box my={10}>
                    <Typography align="center" variant="h2" gutterBottom>Email <Link>jason.dhuras@gmail.com</Link> for all inquiries</Typography>
                </Box>
                <Box my={100}></Box>
            </Container>
        </>
    );
};

export default ContactLayout;

